# Stage 1: Build Stage (oven/bun:1.1.44-alpine, ARM64)
FROM oven/bun@sha256:de8a253c6b7b2cbde89697a951cc9828e5dbe1c3462abc157a9605db6fbdd6d9 AS builder

# Set working directory and copy necessary files
WORKDIR /app

# COPY files
COPY . .

# Install Git and dependencies, then build the project
RUN apk update && apk add --no-cache git && \
    bun install && bun run build

# Stage 2: NGINX Unprivileged Setup (1.27.3-alpine-slim, ARM64)
FROM nginxinc/nginx-unprivileged@sha256:ad8208f59f060b5e49638b15902af1965e2e53dc76395903fecfbee3bb0b9018 AS final

# Set working directory for NGINX and copy built files from the build stage
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html/docs

# Copy custom NGINX configuration
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Copy custom redirects NGINX configuration
COPY nginx/redirects.conf /etc/nginx/conf.d/redirects.conf

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
