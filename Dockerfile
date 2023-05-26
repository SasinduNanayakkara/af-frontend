FROM node:14-alpine

WORKDIR /app

COPY package.json ./

RUN apk add git

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]