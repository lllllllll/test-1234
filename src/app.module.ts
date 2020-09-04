import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    ProductModule,
    OrderModule,
    MongooseModule.forRoot(process.env.MONGO_URL),
  ]
})
export class AppModule {}
