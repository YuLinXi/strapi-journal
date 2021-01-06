module.exports = ({ env }) => ({
  host: env('HOST'),
  port: env.int('PORT'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'd9a8d9d8bb7b23106ca3f4d201838316'),
    },
  },
});
