import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class OrderDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'กรุณาระบุ userCode' })
  userCode: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'กรุณาระบุ productCode' })
  productCode: string;

  @ApiProperty()
  description?: string;
  
  @ApiProperty()
  isActive?: boolean;
}

export class OrdersDto {
  @IsNotEmpty({ message: 'กรุณาระบุ data' })
  orders: OrderDto[]
}