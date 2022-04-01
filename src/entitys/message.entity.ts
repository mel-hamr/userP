import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { user } from "./user.entity";

@Entity('messages')
export class    message extends BaseEntity{

    @PrimaryGeneratedColumn({
        comment : 'the quiz unique indentifier',
    })
    id : number

    @Column()
    senderId : number
    
    @Column()
    reciverId : number

    @Column()
    message : string

    // @ManyToOne(() =>user,(user) => user.messages)
    // user : user
}