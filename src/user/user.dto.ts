import { IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty({ message: 'กรุณาระบุ fullname' })
  fullname: string;
  @IsNotEmpty({ message: 'กรุณาระบุ username' })
  username: string;
  @IsNotEmpty({ message: 'กรุณาระบุ password' })
  password: string;
  @IsNotEmpty({ message: 'กรุณาระบุ address' })
  address: string;
}

export class UsersDto {
  @IsNotEmpty({ message: 'กรุณาระบุ data' })
  users: UserDto[]
}
