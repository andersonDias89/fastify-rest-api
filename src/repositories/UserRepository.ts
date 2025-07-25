import { IUserRepository } from "../interfaces/IUserRepository.js";
import { User, CreateUser } from "../schemas/UserSchema.js";
import prisma from "../lib/prisma.js";

export class UserRepository implements IUserRepository {
  async findAll(): Promise<User[]> {
    return await prisma.user.findMany();
  }

  async createUser(userData: CreateUser): Promise<User> {
    return await prisma.user.create({
      data: userData,
    });
  }
} 