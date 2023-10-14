module.exports = ({ env }) => ({
  host: env('HOST'),
  url: env('PUBLIC_URL') + '/api',
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
