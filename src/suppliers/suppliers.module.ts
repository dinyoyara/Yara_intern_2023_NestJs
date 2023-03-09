import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from 'src/products/product.model';
import { Supplier } from './suppliers.model';

@Module({
    imports: [SequelizeModule.forFeature([Supplier, Product])]
})
export class SuppliersModule {}
