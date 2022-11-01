FROM node:16
WORKDIR /opt
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE $PORT
CMD PORT=$PORT node ./src/app.js