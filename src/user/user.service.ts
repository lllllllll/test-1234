import { UserDto } from './user.dto';
import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('user') private readonly model: Model<User>) { }

  async create(user: UserDto): Promise<any> {
    return await new this.model(user).save();
  }
  async findOne(id: string): Promise<any> {
    return await this.model.find({ _id: id }).exec();
  }
  async login(user: any): Promise<any> {
    return await this.model.find({ _id: user.id }).exec();
  }
  async logout(user: any): Promise<any> {
    return await this.model.find({ _id: user.id }).exec();
  }
  async findAll(): Promise<any> {
    return await this.model.find().exec();
  }
  async remove(id: string): Promise<any> {
    return await this.model.remove({ _id: id }).exec();
  }
}
