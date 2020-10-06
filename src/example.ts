import Fastify from 'fastify';
import FastifyCookie from 'fastify-cookie';

const app = Fastify();
app.register(FastifyCookie);

app.get('/example', (_req, res) => {
  res.header("x-some-header", "foobar");
  res.send(200);
})
