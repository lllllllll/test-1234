import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'กรุณาระบุ fullname' })
  fullname: string;
  
  @ApiProperty()
  @IsNotEmpty({ message: 'กรุณาระบุ username' })
  username: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'กรุณาระบุ password' })
  password: string;
  
  address?: string;
}

export class UsersDto {
  @IsNotEmpty({ message: 'กรุณาระบุ data' })
  users: UserDto[]
}
