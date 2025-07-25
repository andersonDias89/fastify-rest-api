// Importa a biblioteca Zod para validação de esquemas
import { z } from "zod";

// Define o esquema de validação para criação de um novo usuário
export const CreateUserSchema = z.object({
  // Campo name: deve ser uma string não vazia (mínimo 1 caractere)
  name: z.string().min(1, "Nome é obrigatório"),
  // Campo email: deve ser uma string com formato de email válido
  email: z.string().email("Email inválido"),
});

// Cria um tipo TypeScript baseado no esquema CreateUserSchema usando inferência do Zod
export type CreateUser = z.infer<typeof CreateUserSchema>; 