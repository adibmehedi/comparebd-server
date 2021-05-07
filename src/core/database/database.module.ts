import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Product, ProductSchema } from './schemas/product.schema';


@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService ) => ({
                uri:  configService.get('DB_STRING')
            }),
            inject: [ConfigService],
        }),
        MongooseModule.forFeature([
            { name: Product.name, schema: ProductSchema }
        ])
    ],
    controllers: [],
    providers: [],
    exports: [MongooseModule]
})
export class DatabaseModule {}
