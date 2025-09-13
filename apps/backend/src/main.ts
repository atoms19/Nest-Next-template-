import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConsoleLogger, ValidationPipe } from '@nestjs/common';
import  cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
		logger:new ConsoleLogger({
colors:true,

		})
  });
  app.use(cookieParser());
  await app.listen(process.env.PORT ?? 3001);

}
bootstrap();
