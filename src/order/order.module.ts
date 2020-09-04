import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderSchema } from './order.schemas';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'order', schema: OrderSchema }])],
  providers: [OrderService],
  controllers: [OrderController]
})
export class OrderModule {}
