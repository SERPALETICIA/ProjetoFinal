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
  import { EventService } from './event.service';
  import { Event } from './event.entity';
  
  @Controller('/events')
  export class EventController {
    constructor(private service: EventService) {}
  
    @Get()
    findAll(): Promise<Event[]> {
      return this.service.findAll();
    }
  
    @Get(':id')
    async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Event> {
      const found = await this.service.findById(id);
  
      if (!found)
        throw new HttpException('Event  not found', HttpStatus.NOT_FOUND);
  
      return found;
    }
  
    @Post()
    create(@Body() event : Event): Promise<Event> {
      return this.service.save(event);
    }
  
    @Put(':id')
    async update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() event : Event,
    ): Promise<Event> {
      const found = await this.service.findById(id);
  
      if (!found)
        throw new HttpException('Event not found', HttpStatus.NOT_FOUND);
  
      event.id = found.id;
  
      return this.service.save(event);
    }
  
    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
      const found = await this.service.findById(id);
  
      if (!found)
        throw new HttpException('Event not found', HttpStatus.NOT_FOUND);
  
      return this.service.remove(id);
    }
  }