import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Add new user' })
  @ApiCreatedResponse({
    description: 'The user has been successfully created!',
  })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error!' })
  @ApiBadRequestResponse({ description: 'Bad request!' })
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiOkResponse({ description: 'Get all users successfully!' })
  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @ApiOperation({ summary: 'Get user by id' })
  @ApiOkResponse({ description: 'Get user by id successfully!' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error!' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne(id);
  }

  @ApiOperation({ summary: 'Update user by id' })
  @ApiOkResponse({ description: 'The user has been successfully updated!' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error!' })
  @ApiBadRequestResponse({ description: 'Bad request!' })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(id, updateUserDto);
  }

  @ApiOperation({ summary: 'Delete user by id' })
  @ApiOkResponse({ description: 'The user has been successfully deleted!' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error!' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userService.remove(id);
  }
}
