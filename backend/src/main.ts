import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter } from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());
  const PORT = process.env.PORT ?? 3000;
  const HOST = process.env.HOST ?? 'localhost';
  await app.listen(PORT, HOST);
}
bootstrap();
