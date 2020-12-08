FROM node:lts-buster AS builder
WORKDIR /src
COPY . /src
RUN npm ci && npm run build

FROM nginx:alpine
COPY --from=builder ./src/build /usr/share/nginx/html/