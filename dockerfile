FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN --mount=type=secret,id=cf-access-key-id,env=ACCESS_KEY_ID \
    --mount=type=secret,id=cf-secret-access-key,env=SECRET_ACCESS_KEY \
    --mount=type=secret,id=cf-account-id,env=ACCOUNT_ID \
    npm run build
RUN npm prune --production

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "build" ]