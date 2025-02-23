FROM node:18.20.7-alpine3.20 AS base
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable pnpm

FROM base AS dependencies
RUN pnpm install

FROM base AS build
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
# Build app
RUN pnpm run build
# Remove dev dependencies
RUN pnpm prune --prod

FROM base AS deploy
RUN apk add curl
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
CMD [ "node", "dist/main" ]
