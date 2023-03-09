import { IsEmail, IsEnum, IsOptional, Length } from 'class-validator';

export class SignupDto {
    @Length(3)
    name: string;

    @IsEmail()
    email: string;

    @Length(5)
    password: string;

    @IsOptional()
    @IsEnum(['admin', 'write', 'read'], {
        message: 'role must be one of the following values: admin, read, write'
    })
    role?: string;
}
