FROM node:16
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
VOLUME [ "/app/node_modules" ]
CMD ["npm", "start"]