import { IsNotEmpty, IsOptional, IsString, IsUrl } from "class-validator";

export class createPostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  text: string;
  
  @IsUrl()
  @IsNotEmpty()
  @IsOptional()
  image: string;
}