FROM node:lts-alpine AS builder
WORKDIR /app
COPY . /app

RUN npm install
RUN npm run build

FROM nginx:alpine AS webapp
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/ /usr/share/nginx/html/

EXPOSE 80/tcp
