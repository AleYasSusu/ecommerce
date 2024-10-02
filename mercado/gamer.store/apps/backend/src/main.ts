import { config } from 'dotenv';
config(); // Carrega as variáveis de ambiente do arquivo .env

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(3005);

  //console.log('DATABASE_URL:', process.env.DATABASE_URL); // Verifique se a variável está sendo carregada corretamente
}

bootstrap();
