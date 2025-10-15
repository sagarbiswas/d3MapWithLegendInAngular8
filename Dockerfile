# Multi-stage Dockerfile for building Angular 8 app and serving with nginx
# Build stage
FROM node:12-alpine AS build
WORKDIR /app

# Install build dependencies
COPY package.json package-lock.json* ./
RUN npm install --silent

# Copy source and build
COPY . .
RUN npm run build -- --prod

# Production stage
FROM nginx:1.21-alpine
COPY --from=build /app/dist/d3mapAng7SampleWithSCSS /usr/share/nginx/html

# Custom nginx config for single-page app routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
#CMD ["nginx", "-g", "daemon off;"]
CMD ["npx", "http-server", "dist/d3map-angular", "-p", "8080"]
