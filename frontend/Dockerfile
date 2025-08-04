# ---- Build Stage ----
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build the app
RUN npm run build


# ---- Production Stage ----
FROM nginx:stable-alpine AS production

# Copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

# Use custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose custom port
EXPOSE 4001

CMD ["nginx", "-g", "daemon off;"]

