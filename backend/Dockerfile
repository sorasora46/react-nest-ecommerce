FROM node:slim AS base

RUN corepack enable pnpm

# Install Package
FROM base AS installer

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

# Build project
FROM base AS builder

WORKDIR /app

COPY --from=installer /app/node_modules ./node_modules

COPY . .

RUN pnpm build

# Run project
FROM base AS runner

WORKDIR /app

COPY --from=builder /app/dist ./
COPY --from=installer /app/node_modules ./node_modules

EXPOSE 3000

ENV HOST=0.0.0.0

CMD ["node", "main.js"]
