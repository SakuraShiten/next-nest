import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import {Elements} from "@/models/elements/models/elements.model";
import {Users} from "@/models/user/models/user.model";

@Entity()
export class Pages {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @Column({length: 100})
    url: string

    @ApiProperty()
    @Column({type: 'boolean', default: false})
    isPublished: boolean

    @ApiProperty()
    @Column({length: 100})
    title: string

    @ApiProperty()
    @CreateDateColumn()
    createAt: Date

    @ApiProperty()
    @UpdateDateColumn()
    updateAt: Date

    @OneToMany(() => Elements, elements => elements.page, {cascade: true})
    @ApiProperty({type: () => [Elements]})
    elements: Elements[]

    @ManyToOne(() => Users, user => user.id)
    @ApiProperty({type: () => Users})
    user: Users
}