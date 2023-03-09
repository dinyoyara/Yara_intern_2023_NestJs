import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Supplier } from 'src/suppliers/suppliers.model';
import { Product } from './product.model';

@Module({
    imports: [SequelizeModule.forFeature([Product, Supplier])]
})
export class ProductsModule {}
