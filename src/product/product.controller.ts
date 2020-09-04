import { ProductDto } from './product.dto';
import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { HeaderGuard } from 'src/head.guards';

@Controller('product')
@UseGuards(new HeaderGuard())
export class ProductController {
  constructor(
    private service: ProductService,
  ) {}

  @Get()
  async findAll(): Promise<any> {
    return await this.service.findAll();
  }
  @Post()
  async create(@Body() body: ProductDto): Promise<any> {
    return await this.service.create(body);
  }
  @Get('/:id')
  async findById(@Param('id') id): Promise<any> {
    return await this.service.findOne(id);
  }
  @Delete('/:id')
  async removeById(@Param('id') id): Promise<any> {
    return await this.service.remove(id);
  }
}
