import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    throw new NotImplementedException();
  }

  async findAll() {
    throw new NotImplementedException();
  }

  async findOne(id: number) {
    throw new NotImplementedException();
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    throw new NotImplementedException();
  }

  async remove(id: number) {
    throw new NotImplementedException();
  }
}
