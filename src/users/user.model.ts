import { Column, DataType, DeletedAt, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';

@Table
export class User extends Model {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    id: string;

    @Column
    name: string;

    @Unique
    @Column
    email: string;

    @Column
    password: string;

    @DeletedAt
    @Column
    deletedAt?: Date;
}
