import {ApiProperty} from "@nestjs/swagger";
import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Texts {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @Column({type: 'text'})
    text: string

    @ApiProperty()
    @CreateDateColumn()
    createAt: Date
}