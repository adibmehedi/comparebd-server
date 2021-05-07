import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class Product extends Document {

  @Prop({ required: true })
  _id: string;
  
  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: true })
  title: string;

  @Prop({required: true})
  price: number;

  @Prop({required: true})
  description: string;

  @Prop({required: true})
  url: string;
  
  @Prop({required: true})
  site: string;

}

export const ProductSchema = SchemaFactory.createForClass(Product);