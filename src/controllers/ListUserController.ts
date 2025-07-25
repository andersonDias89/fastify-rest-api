// Importa o tipo FastifyReply do Fastify para manipulação de respostas HTTP
import { FastifyReply } from "fastify";
// Importa a interface do serviço de listagem de usuários
import { IListUserService } from "../interfaces/IListUserService.js";

// Classe que implementa o controlador de listagem de usuários
export class ListUserController {
  // Construtor que recebe uma instância do serviço via injeção de dependência
  constructor(private listUserService: IListUserService) {}

  // Método assíncrono que lista todos os usuários
  async listUsers(reply: FastifyReply): Promise<void> {
    try {
      // Chama o serviço para buscar todos os usuários
      const users = await this.listUserService.listUsers();
      // Envia a resposta com status 200 (padrão) e os dados dos usuários
      reply.send(users);
    } catch (error) {
      // Log do erro no console para debugging
      console.error("Erro ao buscar usuários:", error);
      // Envia resposta de erro com status 500 (erro interno do servidor)
      reply.status(500).send({
        message: "Erro interno do servidor",
        error: error instanceof Error ? error.message : "Erro desconhecido"
      });
    }
  }
} 