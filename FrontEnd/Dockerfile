# Dockerfile for React App

# Base image
FROM node:latest as build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install
ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL
# Copy source files
COPY . .

# Build the app
RUN npm run build

# Production environment
FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
