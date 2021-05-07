import { Controller, Post, Get, Body, HttpStatus, HttpException, UseGuards, Headers, Param, Res, Req } from '@nestjs/common';
import { Response, Request } from 'express';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
    constructor(
        private searchService: SearchService
    ) {}

    @Get(':query/:page')
    async query(@Headers() headers, @Param('query') query, @Param('page') page,  @Res() res: Response)
    {
        const searchText = query ? query.trim(): null;
        const pageNumber = Number(page) ? Number(page) : 1;

        const products = await this.searchService.queryProducts(searchText, pageNumber);
 

        if(!searchText || !products) {
            return res.status(HttpStatus.BAD_REQUEST).json(new HttpException('Failed to query', HttpStatus.BAD_REQUEST));
        }

        return res.json({
            'success': true,
            'products': products
        });
       
    }

    @Get('hello')
    async hello(@Headers() headers,  @Res() res: Response)
    {
        return res.status(HttpStatus.BAD_REQUEST).json(new HttpException('Failed to query', HttpStatus.BAD_REQUEST));
    }

}
