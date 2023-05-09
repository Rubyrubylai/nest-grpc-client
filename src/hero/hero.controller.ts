import { Controller, Logger, Post, Body, OnModuleInit, Get, Param } from '@nestjs/common';
import { IHeroService } from './grpc.interface';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { microserviceOptions } from './grpc.options';

@Controller('hero')
export class HeroController implements OnModuleInit {
  private logger = new Logger('AppController');

  @Client(microserviceOptions)
  private client: ClientGrpc;

  private heroService: IHeroService;


  onModuleInit() {
    this.heroService = this.client.getService<IHeroService>('HeroService')
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.heroService.findOne({ id });
  }
}
