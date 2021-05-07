import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { UtilService } from './../core/services/util.service';

@Module({
  controllers: [
    ProductController
  ],
  providers: [
    ProductService, 
    UtilService
  ]
})
export class ProductModule {}
