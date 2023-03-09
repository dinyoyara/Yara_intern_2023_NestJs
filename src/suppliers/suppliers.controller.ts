import { Body, Controller, Get, Post, Delete, UseGuards, Param } from '@nestjs/common';
import { Role } from 'src/auth/data';
import { Roles } from 'src/auth/decorator';

import { JwtGuard, RolesGuard } from '../auth/guard';
import { CreateSupplierDto } from './dto';
import { Supplier } from './suppliers.model';
import { SuppliersService } from './suppliers.service';

@UseGuards(JwtGuard, RolesGuard)
@Controller('suppliers')
export class SuppliersController {
    constructor(private supplierService: SuppliersService) {}

    @Roles(Role.Admin, Role.Write)
    @Post()
    create(@Body() dto: CreateSupplierDto): Promise<Supplier> {
        return this.supplierService.createAsycn(dto);
    }

    @Get()
    getAll(): Promise<Supplier[]> {
        return this.supplierService.getAllAsync();
    }

    @Roles(Role.Admin)
    @Delete(':id')
    deletebyId(@Param('id') id: string): Promise<Supplier> {
        return this.supplierService.deleteByIdAsycn(id);
    }
}
