import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    disableErrorMessages: false,
    whitelist: false,
    forbidNonWhitelisted: true,
    transform: true
  }));
  app.enableCors();
  await app.listen(8080);
}
bootstrap();
