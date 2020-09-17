import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const SERVER_PORT:number = 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(SERVER_PORT);
  Logger.log(`server running on SERVER_PORT: ${SERVER_PORT}`);
}
bootstrap();
