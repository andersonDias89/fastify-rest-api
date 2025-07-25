import { IListUserRepository } from "../interfaces/IListUserRepository.js";
import { User } from "../schemas/ListUserSchema.js";
import prisma from "../lib/prisma.js";

export class ListUserRepository implements IListUserRepository {
  async findAll(): Promise<User[]> {
    return await prisma.user.findMany();
  }
} 