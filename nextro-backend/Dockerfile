# Using an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/nextro-backend

# Copy both package.json and package-lock.json files
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the entire project directory into the container
COPY . .

# Expose port 3000 to allow outside access to our app
EXPOSE 3000

# Command to run when starting the container
CMD ["npm", "start"]
