import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from 'src/products/product.model';
import { Supplier } from './suppliers.model';
import { SuppliersController } from './suppliers.controller';
import { SuppliersService } from './suppliers.service';

@Module({
    imports: [SequelizeModule.forFeature([Supplier, Product])],
    controllers: [SuppliersController],
    providers: [SuppliersService]
})
export class SuppliersModule {}
