import Fastify, { FastifyInstance } from 'fastify'
import { usersRoutes } from './routes/users.js'

const fastify: FastifyInstance = Fastify({ logger: true })

// Registra as rotas
fastify.register(usersRoutes)

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