import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

// import { User } from './src/user/user.entity';

// module.exports = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'josephtongay',
//   database: 'record-label',
//   entities: [User],
//   synchronize: true,
// };

// {
//   "type": "postgres",
//   "host": "localhost",
//   "port": 5432,
//   "username": "josephtongay",
//   "database": "record-label",
//   "entities": ["src/**/*.entity.ts"],
//   "logging": true,
//   "syncronize": true
// }
