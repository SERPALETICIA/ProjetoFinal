import {InjectRepository} from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { EventType } from "./event-type.entity";

@Injectable()
export class EventTypeService {
  constructor(
    @InjectRepository(EventType)
    private repository: Repository<EventType>,
  ) {}

  findAll(): Promise<EventType[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<EventType> {
    return this.repository.findOneBy({ id: id });
  }

  save(eventType : EventType): Promise<EventType> {
    return this.repository.save(eventType);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

