FROM node:13-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

RUN npm run-script build

EXPOSE 3000

CMD ["npm", "start"]