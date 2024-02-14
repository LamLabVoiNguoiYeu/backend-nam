import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { UpdateOrderDto } from './dto/update-order.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
@ApiTags('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @ApiOperation({ summary: 'Add new order' })
  @ApiCreatedResponse({
    description: 'The order has been successfully created!',
  })
  @ApiBadRequestResponse({ description: 'Bad request!' })
  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    return await this.ordersService.create(createOrderDto);
  }

  @ApiOperation({ summary: 'Get all orders' })
  @ApiOkResponse({ description: 'Get all orders successfully!' })
  @Get()
  async findAll() {
    return await this.ordersService.findAll();
  }

  @ApiOperation({ summary: 'Get order by id' })
  @ApiOkResponse({ description: 'Get order by id successfully!' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error!' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.ordersService.findOne(id);
  }

  @ApiOperation({ summary: 'Update order by id' })
  @ApiOkResponse({ description: 'The order has been successfully updated!' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error!' })
  @ApiBadRequestResponse({ description: 'Bad request!' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return await this.ordersService.update(id, updateOrderDto);
  }

  @ApiOperation({ summary: 'Delete order by id' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error!' })
  @ApiOkResponse({ description: 'The order has been successfully deleted!' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.ordersService.remove(id);
  }
}
