import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller';
import { DbModule } from 'src/db/db.module'; // Certifique-se que o caminho esteja correto
import { ProdutoPrisma } from './produto.prisma';

@Module({
  providers: [ProdutoPrisma],
  imports: [DbModule],  // Importa o DbModule
  controllers: [ProdutoController],

})
export class ProdutoModule {}