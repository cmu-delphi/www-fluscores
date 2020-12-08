FROM node:lts-buster AS builder
WORKDIR /src
COPY . /src
RUN npm ci && npm run build

FROM nginx:stable-alpine
COPY --from=builder ./src/build /usr/share/nginx/html/
# ensure files are readable at runtime
RUN chmod o+r -R /usr/share/nginx/html/