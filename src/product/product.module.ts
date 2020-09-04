import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './product.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'product', schema: ProductSchema }])],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
