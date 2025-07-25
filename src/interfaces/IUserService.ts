import { UsersList, User, CreateUser } from "../schemas/UserSchema.js";

export interface IUserService {
  listUsers(): Promise<UsersList>;
  createUser(userData: CreateUser): Promise<User>;
} 