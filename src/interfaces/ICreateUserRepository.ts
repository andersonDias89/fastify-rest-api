// Importa o tipo CreateUser do esquema de criação de usuários
import { CreateUser } from "../schemas/CreateUserSchema.js";
// Importa o tipo User do esquema de listagem de usuários
import { User } from "../schemas/ListUserSchema.js";

// Interface que define o contrato para o repositório de criação de usuários
export interface ICreateUserRepository {
  // Método que deve criar um novo usuário no banco de dados
  // Recebe os dados do usuário (CreateUser) e retorna uma Promise com o usuário criado (User)
  createUser(userData: CreateUser): Promise<User>;
} 