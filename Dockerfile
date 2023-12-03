# Use the official Node.js image as the base image
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the client-side code for production
WORKDIR /app/client
RUN npm install
RUN npm run build

# Return to the main working directory
WORKDIR /app

# Expose the port that your Node.js server will run on
EXPOSE 8080

# Start the Node.js server
CMD ["npm", "start"]
