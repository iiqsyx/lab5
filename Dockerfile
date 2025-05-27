FROM node:20-alpine

WORKDIR /home/node/app
COPY ./package*.json ./
COPY ./prisma ./prisma

RUN npm install
RUN npx prisma generate

COPY . .

EXPOSE ${PORT}
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]