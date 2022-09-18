import { IsString, IsEmail } from 'class-validator';

export class SignUpInput {
  @IsString()
  name?: string;
  @IsString()
  username?: string;
  @IsString()
  @IsEmail()
  email?: string;
  @IsString()
  password?: string;
  @IsString()
  bio?: string;
}
