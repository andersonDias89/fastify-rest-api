import { FastifyReply, FastifyRequest } from "fastify";
import { IUserService } from "../interfaces/IUserService.js";
import { CreateUser } from "../schemas/UserSchema.js";

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

  async createUser(request: FastifyRequest<{ Body: CreateUser }>, reply: FastifyReply): Promise<void> {
    try {
      const userData = request.body;
      const user = await this.userService.createUser(userData);
      reply.status(201).send(user);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      
      if (error instanceof Error && error.message.includes("Dados inválidos")) {
        reply.status(400).send({
          message: "Dados inválidos",
          error: error.message
        });
      } else if (error instanceof Error && error.message.includes("Unique constraint")) {
        reply.status(409).send({
          message: "Email já existe",
          error: "Este email já está sendo usado por outro usuário"
        });
      } else {
        reply.status(500).send({
          message: "Erro interno do servidor",
          error: error instanceof Error ? error.message : "Erro desconhecido"
        });
      }
    }
  }
} 