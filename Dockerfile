# Используем образ Node.js 18 на базе Alpine Linux для сборки приложения
FROM node:18-alpine AS build

# Устанавливаем рабочую директорию в /app
WORKDIR /app

# Принимаем аргумент сборки ENV_FILE, устанавливаем значение по умолчанию, если аргумент не предоставлен
#ARG ENV_FILE=.env.production

# Копируем все файлы из текущей директории на хост-машине в рабочую директорию в контейнере
COPY . .

# Копируем выбранный файл с переменными окружения в .env
#COPY $ENV_FILE .env
#RUN cat /app/.env.production

#RUN cp .env .env.production

#RUN cat /app/.env

# Устанавливаем зависимости
RUN npm i -g pnpm && pnpm i

# Запускаем сборку проекта
RUN pnpm run build

# Создаем новый этап для запуска приложения
FROM node:18-alpine AS runtime

# Устанавливаем рабочую директорию в /app
WORKDIR /app

# Копируем собранные файлы из этапа сборки
COPY --from=build /.next /app/.next
COPY --from=build /node_modules /app/node_modules
#COPY --from=build /app/.env /app/.env
#COPY --from=build /app/public /app/public
COPY --from=build /package.json /app/package.json
COPY --from=build /pnpm-lock.yaml /app/pnpm-lock.yaml

# Если вашему приложению нужны дополнительные зависимости для выполнения,
# их можно установить здесь, например:
# RUN npm install express

# Задаем команду, которая будет выполнена при запуске контейнера
CMD ["pnpm", "start"]
