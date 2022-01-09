FROM node:lts-alpine

WORKDIR /app
ENV PORT 8080
COPY . .
RUN yarn
RUN yarn build


FROM node:lts-alpine
WORKDIR /app
RUN ls -a
RUN npm i -g pm2
COPY --from=0 app/dist/ ./dist
RUN yarn install --production --frozen-lockfile
CMD ["yarn", "prod"]