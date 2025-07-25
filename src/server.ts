import fastify from "fastify";

const app = fastify();

app.get("/", (req, reply) => {
  reply.send("Hello World");
});

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running on ${address}`);
});

export default app;