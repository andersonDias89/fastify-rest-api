// Importa a biblioteca Zod para validação de esquemas
import { z } from "zod";

// Define o esquema de validação para um usuário individual
export const UserSchema = z.object({
  // Campo id: deve ser uma string que segue o padrão UUID v4
  id: z.string().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i),
  // Campo name: deve ser uma string simples
  name: z.string(),
  // Campo email: deve ser uma string que segue o padrão de email válido
  email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email inválido"),
  // Campo createdAt: deve ser uma data
  createdAt: z.date(),
  // Campo updatedAt: deve ser uma data
  updatedAt: z.date(),
});

// Define o esquema de validação para uma lista de usuários (array de UserSchema)
export const UsersListSchema = z.array(UserSchema);

// Cria um tipo TypeScript baseado no esquema UserSchema usando inferência do Zod
export type User = z.infer<typeof UserSchema>;
// Cria um tipo TypeScript baseado no esquema UsersListSchema usando inferência do Zod
export type UsersList = z.infer<typeof UsersListSchema>; 