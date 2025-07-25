// Importa os tipos FastifyReply e FastifyRequest do Fastify para manipulação de requisições e respostas HTTP
import { FastifyReply, FastifyRequest } from "fastify";
// Importa a interface do serviço de criação de usuários
import { ICreateUserService } from "../interfaces/ICreateUserService.js";
// Importa o tipo CreateUser do esquema de criação
import { CreateUser } from "../schemas/CreateUserSchema.js";

// Classe que implementa o controlador de criação de usuários
export class CreateUserController {
  // Construtor que recebe uma instância do serviço via injeção de dependência
  constructor(private createUserService: ICreateUserService) {}

  // Método assíncrono que cria um novo usuário
  // O tipo genérico especifica que o body da requisição deve ser do tipo CreateUser
  async createUser(request: FastifyRequest<{ Body: CreateUser }>, reply: FastifyReply): Promise<void> {
    try {
      // Extrai os dados do usuário do body da requisição
      const userData = request.body;
      // Chama o serviço para criar o usuário
      const user = await this.createUserService.createUser(userData);
      // Envia a resposta com status 201 (Created) e os dados do usuário criado
      reply.status(201).send(user);
    } catch (error) {
      // Log do erro no console para debugging
      console.error("Erro ao criar usuário:", error);
      
      // Tratamento específico para erros de validação (dados inválidos)
      if (error instanceof Error && error.message.includes("Dados inválidos")) {
        reply.status(400).send({
          message: "Dados inválidos",
          error: error.message
        });
      } 
      // Tratamento específico para erros de constraint único (email duplicado)
      else if (error instanceof Error && error.message.includes("Unique constraint")) {
        reply.status(409).send({
          message: "Email já existe",
          error: "Este email já está sendo usado por outro usuário"
        });
      } 
      // Tratamento para outros tipos de erro
      else {
        reply.status(500).send({
          message: "Erro interno do servidor",
          error: error instanceof Error ? error.message : "Erro desconhecido"
        });
      }
    }
  }
} 