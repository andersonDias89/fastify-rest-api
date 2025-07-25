import { ICreateUserRepository } from "../interfaces/ICreateUserRepository.js";
import { CreateUser } from "../schemas/CreateUserSchema.js";
import { User } from "../schemas/ListUserSchema.js";
import prisma from "../lib/prisma.js";

export class CreateUserRepository implements ICreateUserRepository {
  async createUser(userData: CreateUser): Promise<User> {
    return await prisma.user.create({
      data: userData,
    });
  }
} 