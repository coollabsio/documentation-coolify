1. Install Wrangler (if you haven’t): npm install -g wrangler
2. Log in: wrangler login
3. Add your Discord webhook as a secret:
   - cd cloudflare-worker
   - wrangler secret put DISCORD_WEBHOOK_URL_GOOD
   - wrangler secret put DISCORD_WEBHOOK_URL_BAD
4. Add your Origin for CORS:
   - wrangler secret put ALLOWED_ORIGIN
5. Deploy: wrangler deploy
  - This will create a new Cloudflare Worker project and push it to the cloud. This will give you a URL like https://YOUR_SUBDOMAIN.workers.dev/. Copy that and paste it into /.env in the docs repo or add it as an environment variable in Coolify
6. Create a KV namespace in Cloudflare and add it as a binding to the worker from CF Dashboard
7. Add Bindings to the worker from CF Dashboard
  - Make sure to set the name of the binding as FEEDBACK_KV

Note:
1. If you want to send the feedback to a text channel then simply add the webhook url to wrangler.
2. If you want to send the feedback to a thread or forum post then create a webook for the channel and add the thread id at the end of the webhook url like ?thread_id=THREAD_ID