import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  const port: number = parseInt(`${process.env.PORT}`) || 3000;
  app.enableCors({origin: ['https://short-url-rn.herokuapp.com/', 'http://localhost:3000']});
  await app.listen(port);
}
bootstrap();
