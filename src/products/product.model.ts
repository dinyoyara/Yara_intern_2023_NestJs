import { BelongsTo, Column, DataType, DeletedAt, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Supplier } from 'src/suppliers/suppliers.model';

@Table
export class Product extends Model {
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

    @DeletedAt
    @Column
    deletedAt?: Date;

    @ForeignKey(() => Supplier)
    @Column({
        type: DataType.UUID,
        references: {
            model: Supplier,
            key: 'id'
        }
    })
    supplierId: string;

    @BelongsTo(() => Supplier)
    supplier: Supplier;
}
