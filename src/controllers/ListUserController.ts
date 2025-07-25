import { FastifyReply } from "fastify";
import { IListUserService } from "../interfaces/IListUserService.js";

export class ListUserController {
  constructor(private listUserService: IListUserService) {}

  async listUsers(reply: FastifyReply): Promise<void> {
    try {
      const users = await this.listUserService.listUsers();
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