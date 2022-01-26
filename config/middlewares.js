module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        // strapi
        'https://strapi.cdo.honeycat.ru',
        'http://192.168.1.111:1337',
        'http://localhost:1337',
        // client
        'https://cdo.honeycat.ru',
        'http://192.168.1.111:5003',
        'http://localhost:3000'
      ]
    }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
];
