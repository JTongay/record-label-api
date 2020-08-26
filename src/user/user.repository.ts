import { EntityRepository, Repository, EntityManager } from 'typeorm';
import { User } from './user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
@EntityRepository()
export class UserRepository {
  constructor(private manager: EntityManager) {}

  public async createAndSave(
    username: string,
    password: string,
  ): Promise<User> {
    const user = new User({ username, password });
    user.insertDate = new Date();
    user.updatedDate = new Date();
    console.log(user, 'stupid joopy');
    return await this.manager.save(user);
  }

  public async findAll(): Promise<User[]> {
    return await this.manager.getRepository(User).find();
  }

  public async findById(id: string): Promise<User> {
    return await this.manager.getRepository(User).findOne(id);
  }
}
