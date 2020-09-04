import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'กรุณาระบุ code' })
  code: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'กรุณาระบุ Title' })
  title: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  photos?: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'กรุณาระบุ price' })
  @IsNumber(null, { message: 'กรุณาระบุตัวเลขเท่านั้น'})
  price: number;
}

export class ProductsDto {
  @IsNotEmpty({ message: 'กรุณาระบุ data' })
  products: ProductDto[]
}
