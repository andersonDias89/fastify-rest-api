// Importa o tipo User do esquema de listagem de usuários
import { User } from "../schemas/ListUserSchema.js";

// Interface que define o contrato para o repositório de listagem de usuários
export interface IListUserRepository {
  // Método que deve buscar todos os usuários no banco de dados
  // Retorna uma Promise com um array de usuários (User[])
  findAll(): Promise<User[]>;
} 