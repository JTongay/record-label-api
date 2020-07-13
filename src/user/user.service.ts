import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './dto';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<UserDTO[]> {
    const users: User[] = await this.userRepository.find();
    return users.map(user => new UserDTO(user));
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async create(request: CreateUserDTO): Promise<User> {
    return await this.userRepository.create(request);
  }
}
