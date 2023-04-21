import { Module } from '@nestjs/common';
import { OrderDetailsService } from './order-details.service';
import { OrderDetailsController } from './order-details.controller';
import { OrdersService } from 'src/orders/orders.service';
import { ProductsService } from 'src/products/products.service';

@Module({
  controllers: [OrderDetailsController],
  providers: [OrderDetailsService, OrdersService, ProductsService],
})
export class OrderDetailsModule {}
