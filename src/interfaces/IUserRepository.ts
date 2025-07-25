import { User, CreateUser } from "../schemas/UserSchema.js";

export interface IUserRepository {
  findAll(): Promise<User[]>;
  createUser(userData: CreateUser): Promise<User>;
} 