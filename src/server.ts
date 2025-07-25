// Importa o Fastify e o tipo FastifyInstance
import Fastify, { FastifyInstance } from 'fastify'
// Importa as rotas para criação de usuários
import { createUserRoutes } from './routes/createUserRoutes.js'
// Importa as rotas para listagem de usuários
import { listUserRoutes } from './routes/listUserRoutes.js'

// Cria uma instância do Fastify com logging habilitado
const fastify: FastifyInstance = Fastify({ logger: true })

// Registra as rotas separadas por método
// Registra as rotas de criação de usuários
fastify.register(createUserRoutes)
// Registra as rotas de listagem de usuários
fastify.register(listUserRoutes)

// Define uma rota GET para o caminho raiz "/"
fastify.get("/", (req, reply) => {
  // Retorna "Hello World" como resposta
  reply.send("Hello World");
});

// Inicia o servidor na porta 3333 e host 0.0.0.0 (aceita conexões de qualquer IP)
fastify.listen({ port: 3333, host: '0.0.0.0' }, (err, address) => {
  // Se houver erro ao iniciar o servidor
  if (err) {
    // Exibe o erro no console
    console.error(err);
    // Encerra o processo com código de erro
    process.exit(1);
  }
  // Se o servidor iniciar com sucesso, exibe a mensagem de confirmação
  console.log(`Server is running on ${address}`);
});

// Exporta a instância do Fastify para uso em outros módulos
export default fastify;