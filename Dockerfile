# Stage 1: Build the app
FROM node:20 AS builder
WORKDIR /app

# Copy package.json files for dependency installation
COPY Servies/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY Servies/ ./

# Build the Next.js app
RUN npm run build

# Stage 2: Run the app in production
FROM node:20-slim
WORKDIR /app

# Copy only what is needed from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the port the app runs on
EXPOSE 3000

# Start the app in production
CMD ["npm", "run", "start"]

