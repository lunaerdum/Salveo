# Use an official Node.js runtime as a base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Start the app
CMD ["node", "server.js"]