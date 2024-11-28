import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { EventFactory } from "../event-factories/event-factory.entity";

@Entity('u4-factory')
export class EventModel{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length: 60, nullable: false})
    name: string;

    @ManyToOne(() => EventFactory, {eager: true, nullable: false})
    @JoinColumn ({ name : 'factory-id'})
    factory: EventFactory 

    @CreateDateColumn({ name : 'create-at'})
    createAt: Date;

    @UpdateDateColumn({ name : 'updated-at'})
    updatedAt: Date;


}