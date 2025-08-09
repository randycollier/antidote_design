FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Remove dev dependencies but keep TypeScript (needed by Next.js)
RUN npm prune --production && npm install typescript

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
