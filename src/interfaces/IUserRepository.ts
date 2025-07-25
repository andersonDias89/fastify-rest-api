import { User } from "../schemas/UserSchema.js";

export interface IUserRepository {
  findAll(): Promise<User[]>;
} 