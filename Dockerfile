FROM node:22-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy source code
COPY . .

# Build app
RUN npm run build

# Jalankan Nuxt di port 3000
CMD ["npm", "run", "dev"]
