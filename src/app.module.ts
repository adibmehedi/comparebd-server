import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SearchModule } from './search/search.module';
import { ProductModule } from './product/product.module';
import { DatabaseModule } from './core/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    DatabaseModule, 
    SearchModule, 
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
