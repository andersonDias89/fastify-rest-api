import Fastify, { FastifyInstance } from 'fastify'
import { createUserRoutes } from './routes/createUserRoutes.js'
import { listUserRoutes } from './routes/listUserRoutes.js'

const fastify: FastifyInstance = Fastify({ logger: true })

// Registra as rotas separadas por método
fastify.register(createUserRoutes)
fastify.register(listUserRoutes)

fastify.get("/", (req, reply) => {
  reply.send("Hello World");
});

fastify.listen({ port: 3333, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running on ${address}`);
});

export default fastify;