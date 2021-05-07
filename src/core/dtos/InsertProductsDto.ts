export class InsertProductDto {
    products: IProduct[];
}

 export interface IProduct {
    _id?: string;
    createdAt?: Date;
    title: string;
    price: number;
    description: string;
    url: string;
    site: string;
 }