import {ApiProperty} from "@nestjs/swagger";
import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserRolesArray, UserRolesTypes} from "@/common/types/types";
import {Users} from "@/models/user/models/user.model";

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