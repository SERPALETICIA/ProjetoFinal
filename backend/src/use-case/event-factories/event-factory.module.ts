import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventFactory } from "./event-factory.entity";
import { EventFactoryService } from "./event-factory.service";
import { EventFactoryController } from "./event-factory.controller";

@Module({
    imports: [TypeOrmModule.forFeature([EventFactory])],
    providers : [EventFactoryService],
    controllers : [EventFactoryController],
})
export class EventFactoryModule {

}