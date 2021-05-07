import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../core/database/schemas/product.schema';
import { UtilService } from './../core/services/util.service';
import { IProduct } from './../core/dtos/InsertProductsDto';

@Injectable()
export class ProductService {

    constructor(
        private utilService: UtilService,
        @InjectModel(Product.name) private productModel: Model<Product>
    ) {}

    async insertProducts(products: IProduct[]) {

        const producModelList: Product[] = [];

        products.forEach(product => {
            product._id = this.utilService.getGuid();
            product.createdAt = new Date(this.utilService.getZeroGmtDateString(new Date()));

            producModelList.push(new this.productModel(product));
        });

        return this.productModel.insertMany(producModelList);
    }

    async deleteProducts(site: string) {
        const filterQuery = { 'site': site };
        return this.productModel.deleteMany(filterQuery);
    }


}