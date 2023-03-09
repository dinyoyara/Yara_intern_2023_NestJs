import { Column, DataType, Length, Model, PrimaryKey, IsEmail, NotEmpty, Unique } from 'sequelize-typescript';

export class Supplier extends Model {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    id: string;

    @Length({ min: 5 })
    @Column
    name: string;

    @IsEmail
    @Column
    email: string;

    @NotEmpty
    @Unique
    @Column
    vat: string;
}
