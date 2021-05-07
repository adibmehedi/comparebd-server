import { Controller, Post, Get, Body, HttpStatus, HttpException, UseGuards, Headers, Param, Res, Req } from '@nestjs/common';
import { Response, Request } from 'express';
import { DeleteProductsDto } from './../core/dtos/DeleteProductsDto';
import { InsertProductDto } from './../core/dtos/InsertProductsDto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {


    constructor(
        private productService: ProductService
    ) {}
    
    @Post('insert')
    async insert(@Headers() headers, @Body() insertProducts:InsertProductDto,  @Res() res: Response)
    {
        const productList = insertProducts.products;
        const products = await this.productService.insertProducts(productList);

        if(!products) {
            return res.status(HttpStatus.BAD_REQUEST).json(new HttpException('Failed to insert', HttpStatus.BAD_REQUEST));
        }

        return res.json({
            'success': true,
            'products': products
        });
       
    }

    // @Post('delete1')
    // async delete1(@Headers() headers, @Body() deleteProducts:DeleteProductsDto,  @Res() res: Response)
    // {

    //     return res.json({
    //         'success': 'hello'
    //     });
       
    // }


    @Post('delete')
    async delete(@Headers() headers, @Body() deleteProducts:DeleteProductsDto,  @Res() res: Response)
    {

        const products = await this.productService.deleteProducts(deleteProducts.site);

        if(!products) {
            return res.status(HttpStatus.BAD_REQUEST).json(new HttpException('Failed to delete', HttpStatus.BAD_REQUEST));
        }

        return res.json({
            'success': true
        });
       
    }
    

}
