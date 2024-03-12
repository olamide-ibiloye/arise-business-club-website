# Use the official Node.js image as the base image
FROM node:latest AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
# RUN npm install --production
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Use Nginx as the production server
FROM nginx:alpine

# Copy the built app from the previous stage to the nginx html directory
COPY --from=build /app/.next /usr/share/nginx/html


# Expose port 80
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
