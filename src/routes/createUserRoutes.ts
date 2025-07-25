import { FastifyInstance } from "fastify";
import { CreateUserController } from "../controllers/CreateUserController.js";
import { CreateUserService } from "../services/CreateUserService.js";
import { CreateUserRepository } from "../repositories/CreateUserRepository.js";
import { CreateUser } from "../schemas/CreateUserSchema.js";

export async function createUserRoutes(fastify: FastifyInstance) {
  // Injeção de dependência
  const createUserRepository = new CreateUserRepository();
  const createUserService = new CreateUserService(createUserRepository);
  const createUserController = new CreateUserController(createUserService);

  fastify.post<{ Body: CreateUser }>("/users", async (request, reply) => {
    await createUserController.createUser(request, reply);
  });
} 