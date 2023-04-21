import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderDetailsService } from './order-details.service';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@Controller('order-details')
@ApiTags('order-details')
export class OrderDetailsController {
  constructor(private readonly orderDetailsService: OrderDetailsService) {}

  @ApiOperation({ summary: 'Add new order-detail' })
  @ApiCreatedResponse({
    description: 'The order-detail has been successfully created!',
  })
  @ApiBadRequestResponse({ description: 'Bad request!' })
  @Post()
  async create(@Body() createOrderDetailDto: CreateOrderDetailDto) {
    return this.orderDetailsService.create(createOrderDetailDto);
  }

  @ApiOperation({ summary: 'Get all order-details' })
  @ApiOkResponse({ description: 'Get all order-details successfully!' })
  @Get()
  async findAll() {
    return await this.orderDetailsService.findAll();
  }

  @ApiOperation({ summary: 'Get order-detail by id' })
  @ApiOkResponse({ description: 'Get order-detail by id successfully!' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error!' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.orderDetailsService.findOne(id);
  }

  @ApiOperation({ summary: 'Update order-detail by id' })
  @ApiOkResponse({
    description: 'The order-detail has been successfully updated!',
  })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error!' })
  @ApiBadRequestResponse({ description: 'Bad request!' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOrderDetailDto: UpdateOrderDetailDto,
  ) {
    return await this.orderDetailsService.update(id, updateOrderDetailDto);
  }

  @ApiOperation({ summary: 'Delete order-detail by id' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error!' })
  @ApiOkResponse({
    description: 'The order-detail has been successfully deleted!',
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.orderDetailsService.remove(id);
  }
}
