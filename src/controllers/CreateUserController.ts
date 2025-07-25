import { FastifyReply, FastifyRequest } from "fastify";
import { ICreateUserService } from "../interfaces/ICreateUserService.js";
import { CreateUser } from "../schemas/CreateUserSchema.js";

export class CreateUserController {
  constructor(private createUserService: ICreateUserService) {}

  async createUser(request: FastifyRequest<{ Body: CreateUser }>, reply: FastifyReply): Promise<void> {
    try {
      const userData = request.body;
      const user = await this.createUserService.createUser(userData);
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