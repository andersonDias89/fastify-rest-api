import { FastifyInstance } from "fastify";
import { UserController } from "../controllers/UserController.js";
import { UserService } from "../services/UserService.js";
import { UserRepository } from "../repositories/UserRepository.js";
import { CreateUser } from "../schemas/UserSchema.js";

export async function usersRoutes(fastify: FastifyInstance) {
  // Injeção de dependência
  const userRepository = new UserRepository();
  const userService = new UserService(userRepository);
  const userController = new UserController(userService);

  fastify.get("/users", async (request, reply) => {
    await userController.listUsers(reply);
  });

  fastify.post<{ Body: CreateUser }>("/users", async (request, reply) => {
    await userController.createUser(request, reply);
  });
}

