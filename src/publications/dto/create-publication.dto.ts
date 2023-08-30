import { IsDate, IsNumber } from "class-validator";

export class CreatePublicationDto {
  @IsNumber()
  mediaId: number;
  
  @IsNumber()
  postId: number;
  
  @IsDate()
  date: Date;
}
