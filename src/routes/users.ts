import { FastifyInstance } from "fastify";
import { z } from "zod";
import prisma from "../lib/prisma.js";

export async function usersRoutes(fastify: FastifyInstance) {
  fastify.get("/users", async (request, reply) => {
    try {
      // Busca todos os usuários no banco de dados
      const users = await prisma.user.findMany();

      // Esquema de validação com zod
      const userSchema = z.object({
        id: z.string().uuid(),
        name: z.string(),
        email: z.string().email(),
        createdAt: z.date(),
        updatedAt: z.date(),
      });

      const usersSchema = z.array(userSchema);

      // Valida os dados retornados do banco
      const result = usersSchema.safeParse(users);

      if (!result.success) {
        return reply.status(500).send({
          message: "Erro ao validar usuários",
          errors: result.error.issues,
        });
      }

      return reply.send(result.data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      return reply.status(500).send({
        message: "Erro interno do servidor",
        error: error instanceof Error ? error.message : "Erro desconhecido"
      });
    }
  });

  fastify.post("/users", async (request, reply) => {
    try {
      const createUserSchema = z.object({
        name: z.string().min(1),
        email: z.string().email(),
      });

      const { name, email } = createUserSchema.parse(request.body);

      const user = await prisma.user.create({
        data: {
          name,
          email,
        },
      });

      return reply.status(201).send(user);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      
      if (error instanceof z.ZodError) {
        return reply.status(400).send({
          message: "Dados inválidos",
          errors: error.issues,
        });
      }

      return reply.status(500).send({
        message: "Erro interno do servidor",
        error: error instanceof Error ? error.message : "Erro desconhecido"
      });
    }
  });
}

