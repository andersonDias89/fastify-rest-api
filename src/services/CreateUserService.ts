// Importa a interface do serviço de criação de usuários
import { ICreateUserService } from "../interfaces/ICreateUserService.js";
// Importa a interface do repositório de criação de usuários
import { ICreateUserRepository } from "../interfaces/ICreateUserRepository.js";
// Importa o tipo e esquema de validação para criação de usuários
import { CreateUser, CreateUserSchema } from "../schemas/CreateUserSchema.js";
// Importa o tipo User do esquema de listagem
import { User } from "../schemas/ListUserSchema.js";

// Classe que implementa o serviço de criação de usuários
export class CreateUserService implements ICreateUserService {
  // Construtor que recebe uma instância do repositório via injeção de dependência
  constructor(private createUserRepository: ICreateUserRepository) {}

  // Método assíncrono que cria um novo usuário
  async createUser(userData: CreateUser): Promise<User> {
    // Valida os dados de entrada usando o esquema CreateUserSchema
    const validationResult = CreateUserSchema.safeParse(userData);
    
    // Se a validação falhar, lança um erro com as mensagens de validação
    if (!validationResult.success) {
      throw new Error(`Dados inválidos: ${validationResult.error.issues.map(issue => issue.message).join(', ')}`);
    }

    // Cria o usuário no repositório usando os dados validados
    const user = await this.createUserRepository.createUser(validationResult.data);
    
    // Retorna o usuário criado
    return user;
  }
} 