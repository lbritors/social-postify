import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class createPostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  text: string;
  
  @IsUrl()
  image: string;
}