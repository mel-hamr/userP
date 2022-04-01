import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { message } from "./message.entity";

@Entity('users')

export class user extends BaseEntity
{
    @PrimaryGeneratedColumn({
        comment : 'the quiz unique indentifier',
    })
    id : number

    @Column()
    userName : string
    
    @Column()
    country : string
    
    // @OneToMany(() => message,(message) => message.user)
    // messages : message[]
}