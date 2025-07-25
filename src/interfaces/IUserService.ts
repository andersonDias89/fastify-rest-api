import { UsersList } from "../schemas/UserSchema.js";

export interface IUserService {
  listUsers(): Promise<UsersList>;
} 