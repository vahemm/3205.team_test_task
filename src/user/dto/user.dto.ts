import { IsEmail, IsNumber, IsOptional } from 'class-validator';

export class UserDto {
  @IsEmail()
  email: string;

  @IsOptional()
  @IsNumber()
  number: number;
}
