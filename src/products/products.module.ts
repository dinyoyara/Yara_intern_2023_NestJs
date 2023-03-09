import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Supplier } from 'src/suppliers/suppliers.model';
import { Products } from './product.model';

@Module({
    imports: [SequelizeModule.forFeature([Products, Supplier])]
})
export class ProductsModule {}
