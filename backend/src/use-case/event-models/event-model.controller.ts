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
  import { EventModelService } from './event-model.service';
  import { EventModel } from './event-model.entity';
  
  @Controller('/event-modls')
  export class EventModelController {
    constructor(private service: EventModelService) {}
  
    @Get()
    findAll(): Promise<EventModel[]> {
      return this.service.findAll();
    }
  
    @Get(':id')
    async findById(@Param('id', ParseUUIDPipe) id: string): Promise<EventModel> {
      const found = await this.service.findById(id);
  
      if (!found)
        throw new HttpException('Event model not found', HttpStatus.NOT_FOUND);
  
      return found;
    }
  
    @Post()
    create(@Body() eventModel : EventModel): Promise<EventModel> {
      return this.service.save(eventModel);
    }
  
    @Put(':id')
    async update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() eventModel : EventModel,
    ): Promise<EventModel> {
      const found = await this.service.findById(id);
  
      if (!found)
        throw new HttpException('Event Model not found', HttpStatus.NOT_FOUND);
  
      eventModel.id = found.id;
  
      return this.service.save(eventModel);
    }
  
    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
      const found = await this.service.findById(id);
  
      if (!found)
        throw new HttpException('EventModel not found', HttpStatus.NOT_FOUND);
  
      return this.service.remove(id);
    }
  }