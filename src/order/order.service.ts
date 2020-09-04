import { OrderDto } from './order.dto';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Order } from './order.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OrderService {
  constructor(@InjectModel('order') private readonly model: Model<Order>) { }

  async create(user: OrderDto): Promise<any> {
    return await new this.model(user).save();
  }
  async findOne(id: string): Promise<any> {
    return await this.model.find({ _id: id }).exec();
  }
  async findByUser(userCode: string): Promise<any> {
    return await this.model.find({ userCode }).exec();
  }
  async findAll(): Promise<any> {
    return await this.model.find().exec();
  }
  async update(id: string, body: OrderDto): Promise<any> {
    return await this.model
      .update({ _id: id },
        { body },
        { upsert: true },)
      .exec();
  }
}
