import { z } from "zod";

export const CreateUserSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
});

export type CreateUser = z.infer<typeof CreateUserSchema>; 