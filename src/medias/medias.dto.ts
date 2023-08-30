import { IsString, IsNotEmpty } from "class-validator";


export class createMediaDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  username: string;
}
