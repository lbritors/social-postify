import { IsDate, IsDateString, IsNumber, IsPositive } from "class-validator";

export class CreatePublicationDto {
  @IsNumber()
  @IsPositive()
  mediaId: number;
  
  @IsNumber()
  @IsPositive()
  postId: number;
  
  @IsDateString()
  date: Date;
}
