import { IsNotEmpty } from "class-validator";

export class messageDto{


    @IsNotEmpty()
    id :number
    @IsNotEmpty()
    senderId : number
    @IsNotEmpty()
    reciverId : number
    @IsNotEmpty()
    message : string
}