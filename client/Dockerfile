# Currently `node-sass` doesn't work with the `node:latest` version of Node 
FROM node:12

WORKDIR /client

COPY package*.json ./
RUN npm install

COPY . .

CMD npm run serve
