const fastify = require('fastify');
const db = require('./plugin/database');
const testRoute = require('./route/tempTestRoute');

function build(opts = {}) {
  const app = fastify(opts);

  // register plugins
  app.register(db);

  // register route as/like a plugin
  app.register(testRoute, { prefix: 'api/v1/test' });

  app.get('/', async (request, reply) => {
    await reply.code(200).send({ hello: 'world!' });
  });

  return app;
}

module.exports = build;
