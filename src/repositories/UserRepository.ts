import { IUserRepository } from "../interfaces/IUserRepository.js";
import prisma from "../lib/prisma.js";

export class UserRepository implements IUserRepository {
  async findAll(): Promise<any[]> {
    return await prisma.user.findMany();
  }
} 