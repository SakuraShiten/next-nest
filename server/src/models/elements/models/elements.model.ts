import {ApiProperty} from "@nestjs/swagger";
import {Column, CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Pages} from "@/models/pages/models/pages.model";
import {ElementTypes, ElementTypesArray} from "@/common/types/types";

@Entity()
export class Elements {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @Column({type: 'enum', enum: ElementTypesArray})
    type: ElementTypes

    @ApiProperty()
    @Column()
    @Index()
    itemId: number

    @ApiProperty()
    @CreateDateColumn()
    createAt: Date

    @ApiProperty()
    @Column({default: 0})
    position: number

    @ManyToOne(() => Pages, page => page.id, {onDelete: 'CASCADE'})
    @ApiProperty({type: () => Pages})
    page: Pages
}