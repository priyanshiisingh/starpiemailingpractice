module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7a3036b2e1b4dd09d612c0a382406f24'),
  },
});
