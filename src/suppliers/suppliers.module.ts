import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Products } from 'src/products/product.model';
import { Supplier } from './suppliers.model';

@Module({
    imports: [SequelizeModule.forFeature([Supplier, Products])]
})
export class SuppliersModule {}
