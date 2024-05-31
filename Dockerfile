# Используйте официальный образ Node.js для сборки проекта
FROM node:18 as build

# Установите рабочую директорию в контейнере
WORKDIR /app

# Копируйте файлы package.json и pnpm-lock.yaml в рабочую директорию
COPY client/package.json pnpm-lock.yaml ./

# Установите зависимости проекта
RUN npm install -g pnpm && pnpm install

# Копируйте остальные файлы проекта в рабочую директорию
COPY client .

# Соберите проект
RUN pnpm run build

# Используйте официальный образ Node.js для запуска проекта
FROM node:18 as runtime

# Установите рабочую директорию в контейнере
WORKDIR /app

# Копируйте собранный проект из предыдущего этапа
COPY --from=build /app .

# Откройте порт 3000 для связи с приложением
EXPOSE 3000

# Запустите приложение
CMD ["pnpm", "start"]