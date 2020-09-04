import { IsNotEmpty } from 'class-validator';

export class OrderDto {
  @IsNotEmpty({ message: 'กรุณาระบุ userCode' })
  userCode: string;
  @IsNotEmpty({ message: 'กรุณาระบุ productCode' })
  productCode: string;
  
  description?: string;
  isActive?: boolean;
}

export class OrdersDto {
  @IsNotEmpty({ message: 'กรุณาระบุ data' })
  orders: OrderDto[]
}