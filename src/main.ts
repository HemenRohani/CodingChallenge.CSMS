import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';


/**
 * Starting the app and adding ValidationPipe to validate and transform DTOs.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const config = new DocumentBuilder()
    .setTitle('has-to-be Coding Challenge : CSMS')
    .setDescription('CSMS(Charging Station Management System) is to calculate a price to a particular charging process so that the eDriver can be invoiced for the consumed services.Establishing a price for a charging process is usually done by applying a rate to the CDR(charge detail record) of the corresponding charging process.')
    .setVersion('1.0')
    .addTag('rate')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
