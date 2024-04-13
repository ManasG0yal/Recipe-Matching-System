# Use the official Node.js 18 image based on Alpine Linux
FROM node:18-alpine

# Set the working directory inside the container to /app
WORKDIR /app

# Copy all files from the current directory (where Dockerfile is located) into the container at /app
COPY . .

# Install dependencies using npm
RUN npm install

# Expose port 3000 to allow external access to the application
EXPOSE 3000

# Define the command to start the application when the container starts
CMD [ "npm", "start" ]
