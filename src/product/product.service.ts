import { ProductDto } from './product.dto';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.interface';
@Injectable()
export class ProductService {
  constructor(@InjectModel('product') private readonly model: Model<Product>) { }

  async create(product: ProductDto): Promise<any> {
    return await new this.model(product).save();
  }
  async findOne(id: string): Promise<any> {
    return await this.model.find({ _id: id }).exec();
  }
  async findAll(): Promise<any> {
    return await this.model.find().exec();
  }
  async remove(id: string): Promise<any> {
    return await this.model.remove({ _id: id }).exec();
  }
}
