module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e56f1804b229c4edc58e9217887e1106'),
  },
});
