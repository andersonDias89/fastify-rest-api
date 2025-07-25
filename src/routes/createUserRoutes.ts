// Importa o tipo FastifyInstance do Fastify
import { FastifyInstance } from "fastify";
// Importa o controlador de criação de usuários
import { CreateUserController } from "../controllers/CreateUserController.js";
// Importa o serviço de criação de usuários
import { CreateUserService } from "../services/CreateUserService.js";
// Importa o repositório de criação de usuários
import { CreateUserRepository } from "../repositories/CreateUserRepository.js";
// Importa o tipo CreateUser para tipagem do body da requisição
import { CreateUser } from "../schemas/CreateUserSchema.js";

// Função que registra as rotas de criação de usuários no Fastify
export async function createUserRoutes(fastify: FastifyInstance) {
  // Configuração da injeção de dependência
  // Cria uma instância do repositório
  const createUserRepository = new CreateUserRepository();
  // Cria uma instância do serviço passando o repositório como dependência
  const createUserService = new CreateUserService(createUserRepository);
  // Cria uma instância do controlador passando o serviço como dependência
  const createUserController = new CreateUserController(createUserService);

  // Define uma rota POST para "/users" que cria um novo usuário
  // O tipo genérico especifica que o body da requisição deve ser do tipo CreateUser
  fastify.post<{ Body: CreateUser }>("/users", async (request, reply) => {
    // Chama o método do controlador para criar o usuário
    await createUserController.createUser(request, reply);
  });
} 