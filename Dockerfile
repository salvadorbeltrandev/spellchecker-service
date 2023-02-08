# Use a Debian image as base
FROM node:14-stretch

# Set the working directory
WORKDIR /app

# Copy the necessary files for the application into the container
COPY package*.json ./

# Install the dependencies of the application
RUN npm install

# Copy the rest of the application files
COPY . .

# Specify the command to run the application
CMD [ "npm", "start" ]