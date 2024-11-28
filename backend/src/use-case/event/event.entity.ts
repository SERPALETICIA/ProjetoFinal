import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { EventType } from "../event-types/event-type.entity";
import { EventModel } from "../event-models/event-model.entity";

@Entity('u4-event')
export class Event{
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({type: 'text', nullable: false})
    description : string;

    @Column({nullable: false})
    photo : string;

    @Column ({ nullable: false})
    eventDate : Date;

    @Column({nullable: false})
    location : string;

    @ManyToOne(() => EventType, {eager: true, nullable: false})
    @JoinColumn({name : 'type-id'})
    type : EventType;

    @ManyToOne(() => EventModel, {eager: true, nullable: false})
    @JoinColumn({name : 'model-id'})
    model : EventModel;

    @CreateDateColumn({ name : 'create-at'})
    createAt: Date;

    @UpdateDateColumn({ name : 'updated-at'})
    updatedAt: Date;


}