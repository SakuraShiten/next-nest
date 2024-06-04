import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import {Roles} from "@/models/user/models/role.model";
import {Elements} from "@/models/elements/models/elements.model";
import {Pages} from "@/models/pages/models/pages.model";

@Entity()
export class Users {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @Column({unique: true, length: 50})
    login: string

    @ApiProperty()
    @Column({length: 100})
    password: string

    @ApiProperty()
    @CreateDateColumn()
    createAt: Date

    @ApiProperty()
    @CreateDateColumn()
    visitAt: Date

    @ApiProperty()
    @UpdateDateColumn()
    updateAt: Date

    @ApiProperty({type: () => [Roles]})
    @OneToMany(() => Roles, roles => roles.user, {cascade: false})
    roles: Roles[]

    @OneToMany(() => Pages, elements => elements.id, {cascade: false})
    @ApiProperty({type: () => [Pages]})
    elements: Pages[]
}