import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const start = async () =>
{
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 4000
  await app.listen(PORT, () =>
  {
    console.log(`Server listening on ${PORT}`);
    
  })
}

start();
