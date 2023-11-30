FROM node:18.6 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Build the Vite project (output to /app/dist)
RUN npm run build

# Use Nginx as the base image for serving the application
FROM nginx:1.24

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Copy built artifacts from the build stage to the Nginx HTML directory
COPY --from=build /app/dist /usr/share/nginx/html
