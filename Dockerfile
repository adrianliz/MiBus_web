FROM node:current-alpine

WORKDIR /usr/src/app/mibus_web

COPY . .

RUN npm install && npm run build && npm i -g serve

EXPOSE ${APP_PORT}
CMD [ "serve", "-s", "build", "-l", $APP_PORT ]