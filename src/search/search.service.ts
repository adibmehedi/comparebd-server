import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../core/database/schemas/product.schema';
import { IProduct } from './../core/dtos/InsertProductsDto';

@Injectable()
export class SearchService {

    constructor(
        @InjectModel(Product.name) private productModel: Model<Product>
    ) {}

    async queryProducts(queryString: string,  pageNumber: number = 0, pageSize: number = 2) {
        const filterModel = { $text: { $search: queryString } };
        const skip = pageNumber * pageSize;

        return this.productModel.find(filterModel).skip(skip).limit(2);
    }

}
