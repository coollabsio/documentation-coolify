export interface Env {
  // Public base URL of our docs to show on discord messages
  SITE_URL: string;
  // Discord webhook secrets
  DISCORD_WEBHOOK_URL_GOOD: string;
  DISCORD_WEBHOOK_URL_BAD: string;
  FEEDBACK_KV: KVNamespace;
  ALLOWED_ORIGIN: string;
}

// 1h window, max 10 requests per IP
const WINDOW_SECONDS = 60 * 60;
const MAX_REQUESTS = 10;

// SHA-256 hex hash of input (to avoid storing raw IP)
async function hash(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export default {
  async fetch(request: Request, env: Env) {
    const ALLOWED_ORIGIN = env.ALLOWED_ORIGIN;
    const corsHeaders = {
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", {
        status: 405,
        headers: { "Access-Control-Allow-Origin": ALLOWED_ORIGIN },
      });
    }

    // Parse the JSON body
    let payload: { url: string; opinion: "good" | "bad"; message: string };
    try {
      payload = await request.json();
    } catch {
      return new Response("Invalid JSON", {
        status: 400,
        headers: { "Access-Control-Allow-Origin": ALLOWED_ORIGIN },
      });
    }

    // Rate-limit: IP only
    const ip = request.headers.get("cf-connecting-ip") || "unknown";
    const ipHash = await hash(ip);
    const rlKey = `rl:${ipHash}`;

    const prev = await env.FEEDBACK_KV.get(rlKey);
    const count = prev ? parseInt(prev, 10) : 0;
    if (count >= MAX_REQUESTS) {
      return new Response(
        JSON.stringify({ success: false, error: "Too Many Requests" }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
          },
        }
      );
    }
    // Bump counter (auto-expires in 1h)
    await env.FEEDBACK_KV.put(rlKey, String(count + 1), {
      expirationTtl: WINDOW_SECONDS,
    });

    const { url, opinion, message } = payload;

    // Resolve full URL for absolute links
    const fullUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : env.SITE_URL.replace(/\/+$/, "") + url;

    // Determine browser and operating system from User-Agent
    const ua = request.headers.get("user-agent") || "";
    let browser = "Unknown";
    if (ua.includes("Edg/")) browser = "Edge";
    else if (ua.includes("OPR/") || ua.includes("Opera")) browser = "Opera";
    else if (ua.includes("Chrome/")) browser = "Chrome";
    else if (ua.includes("Firefox/")) browser = "Firefox";
    else if (ua.includes("Safari/") && !ua.includes("Chrome/")) browser = "Safari";

    let os = "Unknown";
    if (ua.includes("Windows")) os = "Windows";
    else if (ua.includes("Mac OS") || ua.includes("Macintosh")) os = "macOS";
    else if (ua.includes("Android")) os = "Android";
    else if (ua.includes("Linux")) os = "Linux";
    else if (ua.includes("iPhone") || ua.includes("iPad")) os = "iOS";

    // Get user country full name via Intl
    const countryCode = request.cf?.country || "";
    let countryName = countryCode;
    try {
      countryName = new Intl.DisplayNames(["en"], { type: "region" }).of(countryCode) || countryCode;
    } catch {}

    // Compute current Unix timestamp (seconds)
    const nowTs = Math.floor(Date.now() / 1000);

    // Build embed description lines
    const descriptionLines = [
      "**__Feedback__**",
      `- **Type**: ${opinion === "good" ? "Good" : "Bad"}`,
      `- **Message**: ${message}`,
      `- **URL**: ${fullUrl}`,
      "---------------------",
      "**__Information__**",
      `- **Location**: ${countryName}`,
      `- **Browser**: ${browser}`,
      `- **Operating System**: ${os}`,
      `- **Time**: <t:${nowTs}:f> ( <t:${nowTs}:R> )`
    ];

    const discordBody = {
      embeds: [
        {
          color: 0x000000,
          description: descriptionLines.join("\n")
        }
      ]
    };

    // Pick the right webhook based on opinion
    const webhook =
      opinion === "good"
        ? env.DISCORD_WEBHOOK_URL_GOOD
        : env.DISCORD_WEBHOOK_URL_BAD;
    if (!webhook) {
      return new Response("Webhook not configured", {
        status: 500,
        headers: { "Access-Control-Allow-Origin": ALLOWED_ORIGIN },
      });
    }

    // Forward to Discord
    let discordResponse;
    try {
      discordResponse = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(discordBody),
      });
    } catch (err) {
      return new Response(`Discord request failed: ${err}`, {
        status: 502,
        headers: { "Access-Control-Allow-Origin": ALLOWED_ORIGIN },
      });
    }

    // Return result
    const text = await discordResponse.text();
    return new Response(JSON.stringify({
      success: discordResponse.ok,
      status: discordResponse.status,
      statusText: discordResponse.statusText,
      discordBody,
      discordResponseText: text,
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
      },
    });
  }
};
