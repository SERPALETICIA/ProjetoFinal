import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventModel } from "./event-model.entity";
import { EventModelService } from "./event-model.service";
import { EventModelController } from "./event-model.controller";
import { EventFactory } from "../event-factories/event-factory.entity";

@Module({
    imports: [TypeOrmModule.forFeature([EventFactory, EventModel])],
    providers : [EventModelService],
    controllers : [EventModelController],
})
export class EventModelModule {

}