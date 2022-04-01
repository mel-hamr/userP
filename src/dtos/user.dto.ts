import { IsNotEmpty } from "class-validator"

export class userDto{
    @IsNotEmpty()
    userName: string

    @IsNotEmpty()
    country : string
    
}