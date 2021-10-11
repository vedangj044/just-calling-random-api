FROM node:12-alpine as builder

WORKDIR /app

COPY . .

RUN  sed -i "s/https:\/\/vedangj044.github.io\/just-calling-random-api/\./g" package.json

RUN npm install

RUN npm run build


FROM nginx:1.17.1-alpine

COPY --from=builder /app/build/ /usr/share/nginx/html