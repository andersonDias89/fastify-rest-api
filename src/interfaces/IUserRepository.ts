export interface IUserRepository {
  findAll(): Promise<any[]>;
} 