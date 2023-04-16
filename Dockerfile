FROM node:14

WORKDIR /app

COPY package*.json .
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["serve", "-s", "build", "-l", "5000"]
