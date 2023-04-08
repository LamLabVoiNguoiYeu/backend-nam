import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(createCommentDto: CreateCommentDto) {
    throw new NotImplementedException();
  }

  async findAll() {
    throw new NotImplementedException();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async findOne(id: number) {
    throw new NotImplementedException();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: number, updateCommentDto: UpdateCommentDto) {
    throw new NotImplementedException();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async remove(id: number) {
    throw new NotImplementedException();
  }
}
