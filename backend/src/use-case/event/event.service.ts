import {InjectRepository} from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Event } from "./event.entity";
import { Repository } from "typeorm";

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private repository: Repository<Event>,
  ) {}

  findAll(): Promise<Event[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<Event> {
    return this.repository.findOneBy({ id: id });
  }

  save(event : Event): Promise<Event> {
    return this.repository.save(event);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

