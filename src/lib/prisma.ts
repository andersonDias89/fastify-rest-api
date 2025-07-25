// Importa o PrismaClient do Prisma gerado automaticamente
import { PrismaClient } from "../generated/prisma/index.js";

// Cria uma instância única do PrismaClient para toda a aplicação
const prisma = new PrismaClient();

// Exporta a instância do Prisma como padrão para ser usada em outros módulos
export default prisma;