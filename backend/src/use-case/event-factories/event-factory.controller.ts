import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpException,
    HttpStatus,
    Param,
    ParseUUIDPipe,
    Post,
    Put,
  } from '@nestjs/common';
  import { EventFactoryService } from './event-factory.service';
  import { EventFactory } from './event-factory.entity';
  
  @Controller('/event-factories')
  export class EventFactoryController {
    constructor(private service: EventFactoryService) {}
  
    @Get()
    findAll(): Promise<EventFactory[]> {
      return this.service.findAll();
    }
  
    @Get(':id')
    async findById(@Param('id', ParseUUIDPipe) id: string): Promise<EventFactory> {
      const found = await this.service.findById(id);
  
      if (!found)
        throw new HttpException('Event Factory not found', HttpStatus.NOT_FOUND);
  
      return found;
    }
  
    @Post()
    create(@Body() eventFactory : EventFactory): Promise<EventFactory> {
      return this.service.save(eventFactory);
    }
  
    @Put(':id')
    async update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() eventFactory : EventFactory,
    ): Promise<EventFactory> {
      const found = await this.service.findById(id);
  
      if (!found)
        throw new HttpException('EventFactory not found', HttpStatus.NOT_FOUND);
  
      eventFactory.id = found.id;
  
      return this.service.save(eventFactory);
    }
  
    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
      const found = await this.service.findById(id);
  
      if (!found)
        throw new HttpException('EventFactory not found', HttpStatus.NOT_FOUND);
  
      return this.service.remove(id);
    }
  }