import { Module } from '@nestjs/common';
import { DatabaseModule } from './../core/database/database.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { UtilService } from './../core/services/util.service';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    ProductController
  ],
  providers: [
    ProductService, 
    UtilService
  ]
})
export class ProductModule {}
