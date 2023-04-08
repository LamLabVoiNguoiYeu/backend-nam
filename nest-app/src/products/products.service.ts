import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  async create(createProductDto: CreateProductDto) {
    throw new NotImplementedException();
  }

  async findAll() {
    throw new NotImplementedException();
  }

  async findOne(id: number) {
    throw new NotImplementedException();
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    throw new NotImplementedException();
  }

  async remove(id: number) {
    throw new NotImplementedException();
  }
}
