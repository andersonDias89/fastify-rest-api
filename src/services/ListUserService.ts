import { IListUserService } from "../interfaces/IListUserService.js";
import { IListUserRepository } from "../interfaces/IListUserRepository.js";
import { UsersListSchema, UsersList } from "../schemas/ListUserSchema.js";

export class ListUserService implements IListUserService {
  constructor(private listUserRepository: IListUserRepository) {}

  async listUsers(): Promise<UsersList> {
    const users = await this.listUserRepository.findAll();
    
    const result = UsersListSchema.safeParse(users);
    
    if (!result.success) {
      throw new Error(`Erro ao validar usuários: ${result.error.issues.map(issue => issue.message).join(', ')}`);
    }
    
    return result.data;
  }
} 