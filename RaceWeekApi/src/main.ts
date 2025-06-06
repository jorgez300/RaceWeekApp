import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('RaceWeek Api')
    .setDescription('Example API for RaceWeek')
    .setVersion('1.0')
    .addTag('RaceWeek')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  console.log(`app running on http://localhost:21001/api`);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
