import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('u4-type')
export class EventType{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length: 60, nullable: false})
    name: string;

    @CreateDateColumn({ name : 'create-at'})
    createAt: Date;

    @UpdateDateColumn({ name : 'updated-at'})
    updatedAt: Date;


}