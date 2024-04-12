# Dockerfile for React App

# Build stage
FROM node:latest as build

WORKDIR /app

COPY package*.json ./
RUN npm install

ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL

COPY . .
RUN npm run build

# Production environment
FROM nginx:latest

COPY --from=build /app/dist /usr/share/nginx/html


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
