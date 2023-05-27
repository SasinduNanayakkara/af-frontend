FROM node:14

RUN mkdir -p /app
WORKDIR /app

RUN npm install -g serve

COPY package*.json ./
RUN npm install

ENV NODE_OPTIONS=--max_old_space_size=8192

COPY . /app
RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 3000
CMD serve -s build -l 3000
