import { IsEmail, Length } from 'class-validator';

export class CreateSupplierDto {
    @Length(5)
    name: string;

    @IsEmail()
    email: string;

    @Length(8, 12)
    vat: string;
}
