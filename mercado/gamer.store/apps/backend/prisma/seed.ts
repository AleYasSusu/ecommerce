import { config } from 'dotenv';
config(); // Carrega as variáveis de ambiente do arquivo .env

import { PrismaClient } from '@prisma/client';
import { produtos } from '@gstore/core';

const prisma = new PrismaClient();

async function seed() {
  try {
    await prisma.produto.createMany({
      data: produtos.map((p) => ({ ...p, id: undefined })),
    });
    console.log('Seeds inserted successfully!');
  } catch (error) {
    console.error('Error inserting seeds:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
