import {
  Controller,
  Get,
  Param,
  UseInterceptors,
  ClassSerializerInterceptor,
  Post,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './user.entity';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('user')
  async getAll(): Promise<UserDTO[]> {
    return await this.userService.findAll();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('user/:id')
  async getOne(@Param() params) {
    return await this.userService.findOne(params.id);
  }

  @Post('user')
  async create(@Body() request: CreateUserDTO): Promise<User> {
    return await this.userService.create(request);
  }
}
