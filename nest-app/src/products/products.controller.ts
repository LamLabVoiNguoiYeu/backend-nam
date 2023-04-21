import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@Controller('products')
@ApiTags('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({ summary: 'Add new product' })
  @ApiCreatedResponse({
    description: 'The product has been successfully created!',
  })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error!' })
  @ApiBadRequestResponse({ description: 'Bad request!' })
  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productsService.create(createProductDto);
  }

  @ApiOperation({ summary: 'Get all products' })
  @ApiOkResponse({ description: 'Get all products successfully!' })
  @Get()
  async findAll() {
    return await this.productsService.findAll();
  }

  @ApiOperation({ summary: 'Get product by id' })
  @ApiOkResponse({ description: 'Get product by id successfully!' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error!' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.productsService.findOne(id);
  }

  @ApiOperation({ summary: 'Update product by id' })
  @ApiOkResponse({ description: 'The product has been successfully updated!' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error!' })
  @ApiBadRequestResponse({ description: 'Bad request!' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return await this.productsService.update(id, updateProductDto);
  }

  @ApiOperation({ summary: 'Delete product by id' })
  @ApiOkResponse({ description: 'The product has been successfully deleted!' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error!' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.productsService.remove(id);
  }
}
