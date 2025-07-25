// Importa a interface do serviço de listagem de usuários
import { IListUserService } from "../interfaces/IListUserService.js";
// Importa a interface do repositório de listagem de usuários
import { IListUserRepository } from "../interfaces/IListUserRepository.js";
// Importa o esquema de validação e tipo para lista de usuários
import { UsersListSchema, UsersList } from "../schemas/ListUserSchema.js";

// Classe que implementa o serviço de listagem de usuários
export class ListUserService implements IListUserService {
  // Construtor que recebe uma instância do repositório via injeção de dependência
  constructor(private listUserRepository: IListUserRepository) {}

  // Método assíncrono que lista todos os usuários
  async listUsers(): Promise<UsersList> {
    // Busca todos os usuários no repositório
    const users = await this.listUserRepository.findAll();
    
    // Valida os dados retornados usando o esquema UsersListSchema
    const result = UsersListSchema.safeParse(users);
    
    // Se a validação falhar, lança um erro com as mensagens de validação
    if (!result.success) {
      throw new Error(`Erro ao validar usuários: ${result.error.issues.map(issue => issue.message).join(', ')}`);
    }
    
    // Retorna os dados validados
    return result.data;
  }
} 