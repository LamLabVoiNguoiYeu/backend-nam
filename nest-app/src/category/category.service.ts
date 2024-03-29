import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    return await this.prisma.category.create({ data: createCategoryDto });
  }

  async findAll() {
    return await this.prisma.category.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.category.findUniqueOrThrow({ where: { id } });
  }

  async findOneByName(name: string) {
    return await this.prisma.category.findFirstOrThrow({ where: { name } });
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return await this.prisma.category.update({
      data: updateCategoryDto,
      where: { id },
    });
  }

  async remove(id: string) {
    return await this.prisma.category.delete({ where: { id } });
  }
}
