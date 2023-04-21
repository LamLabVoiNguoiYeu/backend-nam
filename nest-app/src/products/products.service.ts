import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    return await this.prisma.product.create({ data: createProductDto });
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.product.findFirstOrThrow({ where: { id } });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const oldProduct = await this.findOne(id);

    if (updateProductDto.description == null) {
      updateProductDto.description = oldProduct.description;
    }

    if (updateProductDto.imageUrl == null) {
      updateProductDto.imageUrl = oldProduct.imageUrl;
    }

    updateProductDto.amount += oldProduct.amount;

    return await this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.product.delete({ where: { id } });
  }
}
