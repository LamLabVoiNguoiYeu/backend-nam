import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotImplementedException,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('orders')
@ApiTags('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    throw new NotImplementedException();
  }

  @Get()
  async findAll() {
    throw new NotImplementedException();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    throw new NotImplementedException();
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    throw new NotImplementedException();
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    throw new NotImplementedException();
  }
}
