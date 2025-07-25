import { FastifyInstance } from "fastify";
import { ListUserController } from "../controllers/ListUserController.js";
import { ListUserService } from "../services/ListUserService.js";
import { ListUserRepository } from "../repositories/ListUserRepository.js";

export async function listUserRoutes(fastify: FastifyInstance) {
  // Injeção de dependência
  const listUserRepository = new ListUserRepository();
  const listUserService = new ListUserService(listUserRepository);
  const listUserController = new ListUserController(listUserService);

  fastify.get("/users", async (request, reply) => {
    await listUserController.listUsers(reply);
  });
} 