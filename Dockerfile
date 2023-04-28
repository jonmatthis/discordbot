FROM node:19

WORKDIR /app

COPY package*.json .
RUN npm  install 


COPY . .
RUN node deploy-command.js

EXPOSE 5000

CMD ["node", "index.js"]
