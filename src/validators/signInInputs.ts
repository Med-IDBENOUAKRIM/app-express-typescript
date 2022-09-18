import { IsString, IsEmail, IsOptional } from 'class-validator';

export class SignInInput {
  @IsString()
  login?: string;
  @IsString()
  password?: string;
}
