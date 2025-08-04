# Use node to build the Vite app
FROM node:20-alpine AS builder

WORKDIR /app

COPY frontend/package*.json ./
RUN npm install

COPY frontend/ ./

RUN npm run build

# Use Nginx to serve
FROM nginx:stable-alpine AS production

COPY --from=builder /app/dist /usr/share/nginx/html
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4001
CMD ["nginx", "-g", "daemon off;"]
