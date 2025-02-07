# Use the official Node.js image as a parent image
FROM node:22-alpine AS builder

# Set the working directory inside the container
WORKDIR /src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile 

# Copy the rest of your application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a smaller image for production
FROM node:22-alpine AS runner

# Set the working directory for the runner image
WORKDIR /src/app

# Copy only the necessary files from the builder stage
COPY --from=builder /src/app/next.config. ./
COPY --from=builder /src/app/.next ./
COPY --from=builder /src/app/node_modules ./node_modules

# Expose port 3000 for the app to run on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
