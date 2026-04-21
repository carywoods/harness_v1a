# syntax=docker/dockerfile:1.4
FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Dependencies stage
FROM base AS deps
WORKDIR /app
# Copy the monorepo structure
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/site/package.json ./apps/site/
COPY apps/editor/package.json ./apps/editor/
COPY packages/shared-config/package.json ./packages/shared-config/
COPY packages/db/package.json ./packages/db/
# Install all dependencies (we need this to properly link workspaces)
RUN pnpm install --frozen-lockfile

# Builder stage
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/site/node_modules ./apps/site/node_modules
COPY --from=deps /app/apps/editor/node_modules ./apps/editor/node_modules
COPY --from=deps /app/packages/db/node_modules ./packages/db/node_modules
# shared-config has no dependencies so node_modules is not created


COPY . .

# Environment variables needed during build
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
ENV NEXT_TELEMETRY_DISABLED=1

# Build the site app
RUN pnpm turbo build --filter site

# Runner stage
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV DATABASE_URL=${DATABASE_URL}

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/site/public ./apps/site/public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/apps/site/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/site/.next/static ./apps/site/.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "apps/site/server.js"]
