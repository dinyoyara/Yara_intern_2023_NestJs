import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateSupplierDto } from './dto';
import { Supplier } from './suppliers.model';

@Injectable()
export class SuppliersService {
    constructor(
        @InjectModel(Supplier)
        private supplierModel: typeof Supplier
    ) {}

    async createAsycn(value: CreateSupplierDto): Promise<Supplier> {
        const supplier = await this.supplierModel.create({
            name: value.name,
            email: value.email,
            vat: value.vat
        });

        delete supplier.dataValues.deletedAt;
        delete supplier.dataValues.updatedAt;
        return supplier;
    }

    getAllAsync(): Promise<Supplier[]> {
        return this.supplierModel.findAll({
            attributes: ['id', 'name', 'email', 'vat']
        });
    }

    async deleteByIdAsycn(id: string): Promise<Supplier> {
        const supplier = await this.supplierModel.findByPk(id);
        supplier.destroy();
        return supplier;
    }
}
