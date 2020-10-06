import Fastify from 'fastify';
import FastifyCookie from 'fastify-cookie';
import knex from 'knex';

const dbClient = knex({});
const app = Fastify();

// The docs for Fastify don't show a need to `await` these calls to `register`.
// It would be nice to be able to safelist these usages somehow.
app.register(FastifyCookie);

app.get('/example', (_req, res) => {
  // You're able to build up your response over multiple lines. These throw
  // linting errors since the FastifyReply type has a `then` method.
  res.header("x-some-header", "foobar");
  res.send(200);
})

app.get('/dbquery', async (_req, res) => {
  // This one is a bit tougher to think about solving for, since eventually
  // you'd want to validate that it's `await`-ed. However, it would still be
  // nice to provide some way to just ignore these types all together.
  const query = dbClient('foos');
  query.orderBy('id', 'desc');
  const dbResult = await query;
  res.send(JSON.stringify(dbResult));
});

app.listen(4000);
