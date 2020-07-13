import { IsNotEmpty } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'username.empty' })
  username: string;

  @IsNotEmpty({ message: 'password.empty' })
  password: string;
}
