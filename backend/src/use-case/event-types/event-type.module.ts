import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventType } from "./event-type.entity";
import { EventTypeService } from "./event-type.service";
import { EventTypeController } from "./event-type.controller";


@Module({
    imports: [TypeOrmModule.forFeature([EventType])],
    providers : [EventTypeService],
    controllers : [EventTypeController],
})
export class EventTypeModule {

}