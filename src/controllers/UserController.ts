import { FastifyReply } from "fastify";
import { IUserService } from "../interfaces/IUserService.js";

export class UserController {
  constructor(private userService: IUserService) {}

  async listUsers(reply: FastifyReply): Promise<void> {
    try {
      const users = await this.userService.listUsers();
      reply.send(users);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      reply.status(500).send({
        message: "Erro interno do servidor",
        error: error instanceof Error ? error.message : "Erro desconhecido"
      });
    }
  }
} 