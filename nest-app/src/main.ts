import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { env } from 'process'; //

import * as dotenv from 'dotenv'; //

dotenv.config(); //

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(env.PORT); //
}
bootstrap();
