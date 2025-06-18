FROM node:latest

WORKDIR /app

COPY app/package*.json .

RUN npm install

COPY ./app ./

EXPOSE 5173

CMD npm run dev