import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from './create-order.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  totalMoney: number;
}
