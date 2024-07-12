# Using an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/nextro-backend

# Copy both package.json and package-lock.json files
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the entire project directory into the container
COPY . .

# Expose port 8080 to allow outside access to NeXtro
EXPOSE 8080

# Command to run when starting the container
CMD ["npm", "start"]
