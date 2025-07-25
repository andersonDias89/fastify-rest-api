// Importa o tipo FastifyInstance do Fastify
import { FastifyInstance } from "fastify";
// Importa o controlador de listagem de usuários
import { ListUserController } from "../controllers/ListUserController.js";
// Importa o serviço de listagem de usuários
import { ListUserService } from "../services/ListUserService.js";
// Importa o repositório de listagem de usuários
import { ListUserRepository } from "../repositories/ListUserRepository.js";

// Função que registra as rotas de listagem de usuários no Fastify
export async function listUserRoutes(fastify: FastifyInstance) {
  // Configuração da injeção de dependência
  // Cria uma instância do repositório
  const listUserRepository = new ListUserRepository();
  // Cria uma instância do serviço passando o repositório como dependência
  const listUserService = new ListUserService(listUserRepository);
  // Cria uma instância do controlador passando o serviço como dependência
  const listUserController = new ListUserController(listUserService);

  // Define uma rota GET para "/users" que lista todos os usuários
  fastify.get("/users", async (request, reply) => {
    // Chama o método do controlador para listar os usuários
    await listUserController.listUsers(reply);
  });
} 