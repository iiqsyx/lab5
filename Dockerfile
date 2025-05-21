FROM node:18-alpine

WORKDIR /app

# Копируем зависимости и устанавливаем их
COPY package*.json ./
RUN npm install

# Копируем остальные файлы
COPY . .

CMD ["npm", "run", "dev"]