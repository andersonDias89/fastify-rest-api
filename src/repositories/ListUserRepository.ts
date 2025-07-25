// Importa a interface do repositório de listagem de usuários
import { IListUserRepository } from "../interfaces/IListUserRepository.js";
// Importa o tipo User do esquema de listagem
import { User } from "../schemas/ListUserSchema.js";
// Importa a instância do cliente Prisma para conexão com o banco de dados
import prisma from "../lib/prisma.js";

// Classe que implementa o repositório de listagem de usuários
export class ListUserRepository implements IListUserRepository {
  // Método assíncrono que busca todos os usuários no banco de dados
  async findAll(): Promise<User[]> {
    // Utiliza o Prisma para buscar todos os registros da tabela 'user'
    return await prisma.user.findMany();
  }
} 