import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  public async validateUser(
    id: string,
    password: string,
  ): Promise<Partial<User>> {
    const user: User = await this.userService.findOne(id);
    if (user && (await user.validatePassword(password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
