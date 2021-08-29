FROM node

WORKDIR /app

COPY *.json ./

RUN npm install -D

COPY . . 

EXPOSE 5050

CMD ["npm", "start"]