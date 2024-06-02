# Use the official Node.js 20-alpine image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN yarn --network-timeout 1000000

# Copy the rest of the application code to the working directory
COPY . .

# Generate the Prisma Client
RUN npx prisma generate

# Expose port 3000
EXPOSE 3000

# Command to run the Next.js application
CMD ["yarn", "dev"]