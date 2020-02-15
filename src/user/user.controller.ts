import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('user')
  async getAll(): Promise<UserDTO[]> {
    return await this.userService.findAll();
  }

  @Get('user/:id')
  async getOne(@Param() params) {
    return await this.userService.findOne(params.id);
  }
}
