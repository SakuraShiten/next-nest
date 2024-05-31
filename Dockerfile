FROM node:20-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY /apps/adm/package.json /apps/adm/pnpm-lock.yaml* ./
RUN corepack enable pnpm && pnpm i


FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY /apps/adm/. .

RUN corepack enable pnpm && pnpm run build

FROM base AS runner
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD HOSTNAME="0.0.0.0" node server.js