import { IsEmail, Length } from 'class-validator';

export class SigninDto {
    @IsEmail()
    email: string;

    @Length(5)
    password: string;
}
