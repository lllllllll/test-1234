import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { json } from 'body-parser';

const port = process.env.PORT || 3000
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(
    new ValidationPipe({ validationError: { target: false } }),
  );
  app.use(json({ limit: '50mb' }));
  const options = new DocumentBuilder()
    .setTitle('Never Sit Up')
    .setDescription('API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('apis-doc', app, document);
  await app.listen(port);
}
bootstrap();
