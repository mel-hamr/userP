import { IsNotEmpty, isNotEmpty } from "class-validator";

export class chatDto{

	@IsNotEmpty()
	senderId: number
	@IsNotEmpty()
	reciverId : number
	
}