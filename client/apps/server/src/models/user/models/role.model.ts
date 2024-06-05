import {ApiProperty} from "@nestjs/swagger";
import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Users} from "@/models/user/models/user.model";
import {UserRolesArray, UserRolesTypes} from "@repo/zod/src/types";

@Entity()
export class Roles {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @Column({type: 'enum', enum: UserRolesArray, default: UserRolesArray[0]})
    role: UserRolesTypes

    @ApiProperty()
    @CreateDateColumn()
    createAt: Date

    @ApiProperty({type: () => Users})
    @ManyToOne(() => Users, user => user.id)
    user: Users
}