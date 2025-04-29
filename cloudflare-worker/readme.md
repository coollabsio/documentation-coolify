1. Install Wrangler (if you haven’t): npm install -g wrangler
2. Log in: wrangler login
3. Add your Discord webhook as a secret:
   - cd cloudflare-worker
   - wrangler secret put DISCORD_WEBHOOK_URL_GOOD
   - wrangler secret put DISCORD_WEBHOOK_URL_BAD
4. Deploy: wrangler deploy
  - This will create a new Cloudflare Worker project and push it to the cloud. This will give you a URL like https://YOUR_SUBDOMAIN.workers.dev/. Copy that and paste it into /.env in the docs repo or add it as an environment variable in Coolify

Note:
1. If you want to send the feedback to a text channel then simply add the webhook url to wrangler.
2. If you want to send the feedback to a thread or forum post then create a webook for the channel and add the thread id at the end of the webhook url like ?thread_id=THREAD_ID
3. If you run into CORS error then update the ALLOWED_ORIGIN variable on line 11 in index.ts to your domain or the specific path that you are using.