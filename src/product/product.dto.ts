import { IsNotEmpty } from 'class-validator';

export class ProductDto {
  @IsNotEmpty({ message: 'กรุณาระบุ Condo name' })
  code: string;
  @IsNotEmpty({ message: 'กรุณาระบุ Title' })
  title: string;
  @IsNotEmpty({ message: 'กรุณาระบุ Description' })
  description: string;
  @IsNotEmpty({ message: 'กรุณาระบุ Photos' })
  photos: string;
  @IsNotEmpty({ message: 'กรุณาระบุ price' })
  price: string;
}

export class ProductsDto {
  @IsNotEmpty({ message: 'กรุณาระบุ data' })
  products: ProductDto[]
}
