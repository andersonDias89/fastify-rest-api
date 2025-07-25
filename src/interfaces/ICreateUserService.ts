import { CreateUser } from "../schemas/CreateUserSchema.js";
import { User } from "../schemas/ListUserSchema.js";

export interface ICreateUserService {
  createUser(userData: CreateUser): Promise<User>;
} 