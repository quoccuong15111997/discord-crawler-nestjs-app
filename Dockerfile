# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory in the Docker image
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Compile the TypeScript code
RUN npm run build

RUN npx prisma generate

# Expose port 3000 for the application
EXPOSE 3001

# Start the application
CMD [ "npm", "run", "start:prod" ]