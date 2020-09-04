import { OrderDto } from './order.dto';
import { Controller, Patch, Get, Param, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(
    private service: OrderService,
  ) {}

  @Get()
  async findAll(): Promise<any> {
    return await this.service.findAll();
  }
  @Post()
  async create(@Body() body: OrderDto): Promise<any> {
    return await this.service.create(body);
  }
  @Get('/:id')
  async findById(@Param('id') id): Promise<any> {
    return await this.service.findOne(id);
  }
  @Get('/:userCode/by-user')
  async findByUser(@Param('userCode') userCode): Promise<any> {
    return await this.service.findByUser(userCode);
  }
  @Patch('/:id')
  async update(@Param('id') id, @Body() body: OrderDto): Promise<any> {
    return await this.service.update(id, body);
  }
}
