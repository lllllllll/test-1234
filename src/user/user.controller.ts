import { UserDto } from './user.dto';
import { Controller, Get, Post, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { HeaderGuard } from 'src/head.guards';

@Controller('user')
@UseGuards(new HeaderGuard())
export class UserController {
  constructor(
    private service: UserService,
  ) {}

  @Get()
  async findAll(): Promise<any> {
    return await this.service.findAll();
  }
  @Post()
  async create(@Body() user: UserDto): Promise<any> {
    return await this.service.create(user);
  }
  @Post('/login')
  async login(@Body() body): Promise<any> {
    return await this.service.login(body);
  }
  @Post('/logout')
  async logout(@Body() body): Promise<any> {
    return await this.service.logout(body);
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
