import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@Controller('categories')
@ApiTags('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiOperation({ summary: 'Add new category' })
  @ApiCreatedResponse({
    description: 'The category has been successfully created!',
  })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error!' })
  @ApiBadRequestResponse({ description: 'Bad request!' })
  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return await this.categoryService.create(createCategoryDto);
  }

  @ApiOperation({ summary: 'Get all category' })
  @ApiOkResponse({ description: 'Get all categorys successfully!' })
  @Get()
  async findAll() {
    return await this.categoryService.findAll();
  }

  @ApiOperation({ summary: 'Get category by id' })
  @ApiOkResponse({ description: 'Get category by id successfully!' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error!' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.categoryService.findOne(id);
  }

  @ApiOperation({ summary: 'Get category by name' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error!' })
  @ApiOkResponse({ description: 'Get category by name successfully!' })
  @Get('name/:name')
  async findOneByName(@Param('name') name: string) {
    return await this.categoryService.findOneByName(name);
  }

  @ApiOperation({ summary: 'Update category by id' })
  @ApiOkResponse({ description: 'The category has been successfully updated!' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error!' })
  @ApiBadRequestResponse({ description: 'Bad request!' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return await this.categoryService.update(id, updateCategoryDto);
  }

  @ApiOperation({ summary: 'Delete category by id' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error!' })
  @ApiOkResponse({ description: 'The category has been successfully deleted!' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.categoryService.remove(id);
  }
}
