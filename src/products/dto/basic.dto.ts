import { IsPositive, IsUUID, Length } from 'class-validator';

export class ProductDto {
    @Length(5)
    name: string;

    @IsPositive()
    price: number;

    @IsUUID()
    supplierId: string;
}
