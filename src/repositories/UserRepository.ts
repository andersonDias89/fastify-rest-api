import { IUserRepository } from "../interfaces/IUserRepository.js";
import { User } from "../schemas/UserSchema.js";
import prisma from "../lib/prisma.js";

export class UserRepository implements IUserRepository {
  async findAll(): Promise<User[]> {
    return await prisma.user.findMany();
  }
} 