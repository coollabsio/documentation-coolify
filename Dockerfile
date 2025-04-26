# Stage 1: Builder stage using the optimized Bun image (oven/bun:canary-alpine, ARM64)
FROM oven/bun@sha256:61619159073fe9a09b813ff20364d676b6ce8a8a9e57307bef1380d1baa99be6 AS builder

# Set the working directory for the build
WORKDIR /app

# Copy the project files from the build context into the container
COPY . .

# Install dependencies and build the project (output will be in the "out" directory)
RUN bun install && \
    bun run build

# Stage 2: Final NGINX image (nginxinc/nginx-unprivileged:1.27.5-alpine-slim, ARM64)
FROM nginxinc/nginx-unprivileged@sha256:0f4b5cc46dbcd3ed755d2dbcf852713c1dd66532927ddd574e8c01fbf6c15e7f AS final

# Copy the NGINX config file from the deployment folder
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the output of the build from the builder stage into the NGINX html directory
COPY --from=builder /app/out /usr/share/nginx/html

# Expose port 80 to allow traffic
EXPOSE 80

# The default command to run the NGINX server
CMD ["nginx", "-g", "daemon off;"]
