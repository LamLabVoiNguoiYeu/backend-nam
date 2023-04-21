import { ApiProperty } from '@nestjs/swagger';
import { StatusOrder } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateOrderDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({ enum: StatusOrder })
  @IsNotEmpty()
  status: StatusOrder;
}
