import {InjectRepository} from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { EventModel } from "./event-model.entity";
import { Repository } from "typeorm";

@Injectable()
export class EventModelService {
  constructor(
    @InjectRepository(EventModel)
    private repository: Repository<EventModel>,
  ) {}

  findAll(): Promise<EventModel[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<EventModel> {
    return this.repository.findOneBy({ id: id });
  }

  save(eventModel : EventModel): Promise<EventModel> {
    return this.repository.save(eventModel);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

