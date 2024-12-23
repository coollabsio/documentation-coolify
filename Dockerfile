FROM node:lts-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --platform=linux --arch=arm64

COPY . .
RUN npm install --platform=linux --arch=arm64

FROM nginx:alpine AS runtime
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80