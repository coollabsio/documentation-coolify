---
title: Bad Gateway Error 
---

# Bad Gateway Error  
If your deployed application **maybe** works when you access it via your server’s IP address and port but shows a **Bad Gateway** error on your domain, the issue is most often due to misconfigured port settings, incorrect host mapping, or your app listening only on localhost.


## Symptoms 
- The application is accessible via the server IP with a port but not via the domain.  
- You might also run into a **No Available Server** error.


## Diagnosis
- **Port Configuration:** Check the port your application is listening on and see if the correct port is entered in the **Port Exposes** field on the Coolify dashboard.  

- **Host Mapping:** Check if the application’s port is mapped to the host system.

- **Listening Address:** Check if the app is only listening to `localhost` inside the container.

- **Domain Port Inclusion:** Check your domain URL has a port number at the end.

- **Container Status:** Check the status of the container where your app is running (Is it unhealthy? Stuck at Starting?).


## Solution
- **Update Port Settings:** Enter the correct port number in the **Port Exposes** field on the Coolify dashboard and restart your app.  
    
    <ZoomableImage src="/docs/images/troubleshoot/applications/bad-gateway/1.webp" />
- **Remove Host Port Mapping:** If the port is mapped to the host system, remove the mapping so the proxy can route traffic correctly, then restart your app.  
    
    <ZoomableImage src="/docs/images/troubleshoot/applications/bad-gateway/2.webp" />
- **Adjust Listening Address:** Change your application so it listens on all network interfaces (`0.0.0.0`) instead of just `localhost`.  

    <ZoomableImage src="/docs/images/troubleshoot/applications/bad-gateway/3.webp" />
- **Correct Domain URL:** Add the correct port number at the end of your domain URL if needed, and restart your application.

    <ZoomableImage src="/docs/images/troubleshoot/applications/bad-gateway/4.webp" />
- **Restart Container / Check Logs:** Try restarting the container to see if it fixes the issue, or check the container logs to find out what's causing it to be unhealthy. 
    - Often, a failing health check might be the problem, and removing the health check could fix it.
   
       <ZoomableImage src="/docs/images/troubleshoot/applications/bad-gateway/5.webp" />


## Support
If these steps don’t solve the issue, consider reaching out for further assistance by joining our [Discord community ↗](https://coolify.io/discord) and sharing your app logs, coolify proxy logs, configuration screenshots, and details of the troubleshooting steps you’ve already tried.
