import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { ProductDto } from './dto';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product)
        private productModel: typeof Product
    ) {}

    async createAsync(value: ProductDto): Promise<Product> {
        const product = await this.productModel.create({
            name: value.name,
            price: value.price,
            supplierId: value.supplierId
        });
        delete product.dataValues.deletedAt;
        delete product.dataValues.updatedAt;
        return product;
    }

    async updateAsync(id: string, value: ProductDto): Promise<Product> {
        await this.productModel.update(
            {
                name: value.name,
                price: value.price,
                supplierId: value.supplierId
            },
            { where: { id: id } }
        );
        return this.productModel.findByPk(id);
    }
}
