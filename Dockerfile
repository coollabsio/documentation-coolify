# Stage 1: Build Stage
FROM oven/bun:alpine AS builder

# Set working directory and copy necessary files
WORKDIR /app
COPY package*.json ./
COPY . .

# Install Git and dependencies, then build the project
RUN apk update && apk add --no-cache git && \
    bun install && bun run build

# Stage 2: NGINX Setup
FROM nginx:alpine

# Set working directory for NGINX and copy built files from the build stage
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/docs/.vitepress/dist .

# Ensure the nginx group and user exist, avoid errors if they already exist
# Set ownership, permissions, and handle custom NGINX configuration
RUN addgroup -S nginx || true && \
    adduser -S nginx -G nginx || true && \
    chown -R nginx:nginx /usr/share/nginx/html /var/cache/nginx /var/log/nginx /run && \
    sed -i 's/user  nginx;/user nginx nginx;/g' /etc/nginx/nginx.conf && \
    mkdir -p /run/nginx && chown nginx:nginx /run/nginx

# Copy custom NGINX configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Use nginx user for security
USER nginx

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
