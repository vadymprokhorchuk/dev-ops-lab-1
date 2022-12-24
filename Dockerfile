FROM node:16
WORKDIR /opt
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]