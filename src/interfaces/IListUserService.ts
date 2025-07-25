import { UsersList } from "../schemas/ListUserSchema.js";

export interface IListUserService {
  listUsers(): Promise<UsersList>;
} 