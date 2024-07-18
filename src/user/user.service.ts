import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';
import { UserDto } from './dto/user.dto';
import { promisify } from 'util';

@Injectable()
export class UserService {
  delay = promisify(setTimeout);

  //   constructor() {}
  async findAll({ email, number }: UserDto) {
    const file = readFileSync(
      join(process.cwd(), 'src/user/data', 'index.json'),
    );
    const fileData = JSON.parse(file.toString());

    const filteredData = fileData.filter((item) => {
      if (number === undefined) {
        return item.email === email;
      }
      return item.email === email && +item.number === number;
    });

    await this.delay(5000);

    return filteredData;
  }
}
