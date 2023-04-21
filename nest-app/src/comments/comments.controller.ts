import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comments')
@ApiTags('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @ApiOperation({ summary: 'Add new comment' })
  @ApiCreatedResponse({
    description: 'The comment has been successfully created!',
  })
  @ApiBadRequestResponse({ description: 'Bad request!' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error!' })
  @Post()
  async create(@Body() createCommentDto: CreateCommentDto) {
    return await this.commentsService.create(createCommentDto);
  }

  @ApiOperation({ summary: 'Get all comments' })
  @ApiOkResponse({ description: 'Get all comments successfully!' })
  @Get()
  async findAll() {
    return await this.commentsService.findAll();
  }

  @ApiOperation({ summary: 'Get comment by id' })
  @ApiOkResponse({ description: 'Get comment by id successfully!' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error!' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.commentsService.findOne(id);
  }

  @ApiOperation({ summary: 'Update comment by id' })
  @ApiOkResponse({ description: 'The comment has been successfully updated!' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error!' })
  @ApiBadRequestResponse({ description: 'Bad request!' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    return await this.commentsService.update(id, updateCommentDto);
  }

  @ApiOperation({ summary: 'Delete comment by id' })
  @ApiOkResponse({ description: 'The comment has been successfully deleted!' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error!' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.commentsService.remove(id);
  }
}
