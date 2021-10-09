FROM node:lts-alpine3.14

COPY . .

RUN yarn install

ENV PORT=8080

CMD ["yarn", "start"]