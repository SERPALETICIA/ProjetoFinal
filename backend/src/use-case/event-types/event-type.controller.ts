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
  import { EventType } from './event-type.entity';
import { EventTypeService } from './event-type.service';
  
  @Controller('/event-types')
  export class EventTypeController {
    constructor(private service: EventTypeService) {}
  
    @Get()
    findAll(): Promise<EventType[]> {
      return this.service.findAll();
    }
  
    @Get(':id')
    async findById(@Param('id', ParseUUIDPipe) id: string): Promise<EventType> {
      const found = await this.service.findById(id);
  
      if (!found)
        throw new HttpException('Event type not found', HttpStatus.NOT_FOUND);
  
      return found;
    }
  
    @Post()
    create(@Body() eventType : EventType): Promise<EventType> {
      return this.service.save(eventType);
    }
  
    @Put(':id')
    async update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() eventType : EventType,
    ): Promise<EventType> {
      const found = await this.service.findById(id);
  
      if (!found)
        throw new HttpException('Event type not found', HttpStatus.NOT_FOUND);
  
      eventType.id = found.id;
  
      return this.service.save(eventType);
    }
  
    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
      const found = await this.service.findById(id);
  
      if (!found)
        throw new HttpException('Event type not found', HttpStatus.NOT_FOUND);
  
      return this.service.remove(id);
    }
  }