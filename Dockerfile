FROM node:alpine

WORKDIR /usr/app
RUN npm install playwright@1.12.2
COPY ./test.js /usr/app

CMD [ "node","test.js" ]
