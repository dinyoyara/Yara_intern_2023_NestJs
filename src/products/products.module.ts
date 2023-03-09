import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Supplier } from 'src/suppliers/suppliers.model';
import { Product } from './product.model';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
    imports: [SequelizeModule.forFeature([Product, Supplier])],
    providers: [ProductsService],
    controllers: [ProductsController]
})
export class ProductsModule {}
