import Fastify, { FastifyInstance } from 'fastify'

const fastify: FastifyInstance = Fastify({ logger: true })

fastify.get("/", (req, reply) => {
  reply.send("Hello World");
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running on ${address}`);
});

export default fastify;