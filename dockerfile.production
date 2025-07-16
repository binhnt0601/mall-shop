# Stage 1: base
FROM node:20-alpine AS base
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Stage 2: build
FROM base AS build
COPY . .
COPY .env .env   
RUN yarn build

# Stage 3: production
FROM node:20-alpine AS production
WORKDIR /app

# Copy standalone app (có cả node_modules và server.js)
COPY --from=build /app/.next/standalone ./

# Copy static assets
COPY --from=build /app/.next/static ./.next/static

# Copy public folder
COPY --from=build /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]
