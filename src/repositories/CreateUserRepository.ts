// Importa a interface do repositório de criação de usuários
import { ICreateUserRepository } from "../interfaces/ICreateUserRepository.js";
// Importa o tipo CreateUser do esquema de criação
import { CreateUser } from "../schemas/CreateUserSchema.js";
// Importa o tipo User do esquema de listagem
import { User } from "../schemas/ListUserSchema.js";
// Importa a instância do cliente Prisma para conexão com o banco de dados
import prisma from "../lib/prisma.js";

// Classe que implementa o repositório de criação de usuários
export class CreateUserRepository implements ICreateUserRepository {
  // Método assíncrono que cria um novo usuário no banco de dados
  async createUser(userData: CreateUser): Promise<User> {
    // Utiliza o Prisma para criar um novo registro na tabela 'user'
    return await prisma.user.create({
      // Passa os dados do usuário para serem inseridos no banco
      data: userData,
    });
  }
} 