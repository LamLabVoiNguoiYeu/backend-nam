import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimingInterceptor } from './interceptors/processing-time.interceptor';
import { PrismaModule } from './prisma/prisma.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { CommentsModule } from './comments/comments.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';
import { OrderDetailsModule } from './order-details/order-details.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    ProductsModule,
    OrdersModule,
    CommentsModule,
    CategoryModule,
    UserModule,
    OrderDetailsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: TimingInterceptor,
    },
  ],
})
export class AppModule {}
