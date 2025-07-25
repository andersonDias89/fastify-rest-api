import { IUserService } from "../interfaces/IUserService.js";
import { IUserRepository } from "../interfaces/IUserRepository.js";
import { UsersListSchema, UsersList, User, CreateUser, CreateUserSchema } from "../schemas/UserSchema.js";

export class UserService implements IUserService {
  constructor(private userRepository: IUserRepository) {}

  async listUsers(): Promise<UsersList> {
    const users = await this.userRepository.findAll();
    
    const result = UsersListSchema.safeParse(users);
    
    if (!result.success) {
      throw new Error(`Erro ao validar usuários: ${result.error.issues.map(issue => issue.message).join(', ')}`);
    }
    
    return result.data;
  }

  async createUser(userData: CreateUser): Promise<User> {
    // Valida os dados de entrada
    const validationResult = CreateUserSchema.safeParse(userData);
    
    if (!validationResult.success) {
      throw new Error(`Dados inválidos: ${validationResult.error.issues.map(issue => issue.message).join(', ')}`);
    }

    // Cria o usuário no repositório
    const user = await this.userRepository.createUser(validationResult.data);
    
    return user;
  }
} 