import { User } from "../schemas/ListUserSchema.js";

export interface IListUserRepository {
  findAll(): Promise<User[]>;
} 