import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './dto';
import { CreateUserDTO } from './dto/create-user.dto';
import { hash } from 'bcrypt';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll(): Promise<UserDTO[]> {
    const users: User[] = await this.userRepository.findAll();
    return users.map(user => new UserDTO(user));
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepository.findById(id);
  }

  async create(request: CreateUserDTO): Promise<User> {
    const { username, password } = request;
    const hashedPassword = await hash(password, 12);
    return await this.userRepository.createAndSave(username, hashedPassword);
  }
}
