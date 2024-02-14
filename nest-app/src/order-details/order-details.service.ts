import { Injectable } from '@nestjs/common';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrdersService } from 'src/orders/orders.service';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class OrderDetailsService {
  constructor(
    private prisma: PrismaService,
    private orderService: OrdersService,
    private productService: ProductsService,
  ) {}

  async create(createOrderDetailDto: CreateOrderDetailDto) {
    const order = await this.orderService.findOne(createOrderDetailDto.orderId);
    const product = await this.productService.findOne(
      createOrderDetailDto.productId,
    );

    order.totalMoney += createOrderDetailDto.quantity * product.price;

    await this.orderService.update(order.id, order);

    return await this.prisma.orderDetail.create({ data: createOrderDetailDto });
  }

  async findAll() {
    return await this.prisma.orderDetail.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.orderDetail.findFirstOrThrow({ where: { id } });
  }

  async update(id: string, updateOrderDetailDto: UpdateOrderDetailDto) {
    return await this.prisma.orderDetail.update({
      where: { id },
      data: updateOrderDetailDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.orderDetail.delete({ where: { id } });
  }
}
