// Importa o tipo UsersList do esquema de listagem de usuários
import { UsersList } from "../schemas/ListUserSchema.js";

// Interface que define o contrato para o serviço de listagem de usuários
export interface IListUserService {
  // Método que deve listar todos os usuários aplicando regras de negócio
  // Retorna uma Promise com uma lista de usuários (UsersList)
  listUsers(): Promise<UsersList>;
} 