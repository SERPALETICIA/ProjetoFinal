import {InjectRepository} from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { EventFactory } from "./event-factory.entity";
import { Repository } from "typeorm";

@Injectable()
export class EventFactoryService {
  constructor(
    @InjectRepository(EventFactory)
    private repository: Repository<EventFactory>,
  ) {}

  findAll(): Promise<EventFactory[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<EventFactory> {
    return this.repository.findOneBy({ id: id });
  }

  save(eventFactory : EventFactory): Promise<EventFactory> {
    return this.repository.save(eventFactory);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

