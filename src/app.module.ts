import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [HeroModule],
  controllers: [AppController],
})
export class AppModule {}
