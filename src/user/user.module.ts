import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { userSchema } from './user.schemas';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'user', schema: userSchema }])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
