import { Column, DataType, Model, PrimaryKey } from 'sequelize-typescript';

export class Products extends Model {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    id: string;

    @Column
    name: string;

    @Column
    price: number;
}
