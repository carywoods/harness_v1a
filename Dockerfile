FROM node:20-slim AS base
RUN apt-get update && apt-get install -y python3 make g++ sqlite3 libsqlite3-dev && rm -rf /var/lib/apt/lists/*
WORKDIR /app

FROM base AS builder
# Copy root package files
COPY package*.json ./

# Copy all package.json files from apps and packages
COPY apps/site/package*.json ./apps/site/
COPY apps/editor/package*.json ./apps/editor/
COPY packages/ui/package*.json ./packages/ui/
COPY packages/db/package*.json ./packages/db/
COPY packages/ai/package*.json ./packages/ai/
COPY packages/types/package*.json ./packages/types/

RUN npm ci

COPY . .
RUN npm run build

FROM base AS runner
COPY --from=builder /app /app
ENV NODE_ENV=production
ENV DATABASE_URL=/data/sqlite.db

EXPOSE 3000 3001

# Scripts will be overridden by docker-compose
CMD ["npm", "run", "start:site"]
