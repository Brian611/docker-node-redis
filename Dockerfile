FROM node:alpine

WORKDIR /home/Documents/app

COPY package.json .

RUN npm i

COPY . .

CMD ["npm","start"]