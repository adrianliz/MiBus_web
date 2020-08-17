FROM node:10

WORKDIR /usr/src/mibus_web

COPY . .
RUN npm install

EXPOSE 80
CMD [ "node", "index.js" ]