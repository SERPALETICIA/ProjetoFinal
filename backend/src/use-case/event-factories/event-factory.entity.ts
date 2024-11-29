import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('u4-factory')
export class EventFactory{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length: 60, nullable: false})
    name: string;

    @CreateDateColumn({ name : 'create-at'})
    createAt: Date;

    @UpdateDateColumn({ name : 'updated-at'})
    updatedAt: Date;


}