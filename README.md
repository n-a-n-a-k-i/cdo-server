# ПУО

Проверка устройств на объектах

## CORS

Strapi:

```
https://strapi.cdo.honeycat.ru
http://192.168.1.111:1337
http://localhost:1337
```

Клиент:

```
https://cdo.honeycat.ru
http://192.168.1.111:5003
http://localhost:3000
```

## Развёртывание

Сборка:

```shell
NODE_ENV=production npm run build
```

Запуск:

```shell
NODE_ENV=production npm start
```

pm2:

```shell
pm2 start server.js --name cdo-strapi
```
