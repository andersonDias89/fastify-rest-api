import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i),
  name: z.string(),
  email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email inválido"),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const UsersListSchema = z.array(UserSchema);

export type User = z.infer<typeof UserSchema>;
export type UsersList = z.infer<typeof UsersListSchema>; 