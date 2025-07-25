import { ICreateUserService } from "../interfaces/ICreateUserService.js";
import { ICreateUserRepository } from "../interfaces/ICreateUserRepository.js";
import { CreateUser, CreateUserSchema } from "../schemas/CreateUserSchema.js";
import { User } from "../schemas/ListUserSchema.js";

export class CreateUserService implements ICreateUserService {
  constructor(private createUserRepository: ICreateUserRepository) {}

  async createUser(userData: CreateUser): Promise<User> {
    // Valida os dados de entrada
    const validationResult = CreateUserSchema.safeParse(userData);
    
    if (!validationResult.success) {
      throw new Error(`Dados inválidos: ${validationResult.error.issues.map(issue => issue.message).join(', ')}`);
    }

    // Cria o usuário no repositório
    const user = await this.createUserRepository.createUser(validationResult.data);
    
    return user;
  }
} 