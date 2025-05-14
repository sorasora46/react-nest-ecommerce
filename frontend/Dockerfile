FROM node:slim AS base

RUN corepack enable pnpm

ARG BACKEND_URL

# Install package
FROM base AS installer

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

# Build project
FROM base AS builder

WORKDIR /app

COPY --from=installer /app/node_modules ./node_modules

COPY . .

ENV VITE_BACKEND_URL=${BACKEND_URL}

RUN pnpm build

# Run project
FROM nginx:alpine AS runner

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
