import { OrderDto } from './order.dto';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Order } from './order.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OrderService {
  constructor(@InjectModel('oder') private readonly model: Model<Order>) { }

  async create(user: OrderDto): Promise<any> {
    return await new this.model(user).save();
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
