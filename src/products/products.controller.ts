import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Role } from '../auth/data';
import { Roles } from '../auth/decorator';
import { JwtGuard, RolesGuard } from '../auth/guard';
import { ProductDto } from './dto';
import { Product } from './product.model';
import { ProductsService } from './products.service';

@UseGuards(JwtGuard, RolesGuard)
@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) {}

    @Roles(Role.Admin, Role.Write)
    @Post()
    create(@Body() dto: ProductDto): Promise<Product> {
        return this.productService.createAsync(dto);
    }

    @Roles(Role.Admin, Role.Write)
    @Put(':id')
    update(@Body() dto: ProductDto, @Param('id') id: string): Promise<Product> {
        return this.productService.updateAsync(id, dto);
    }

    @Get()
    getAll(): Promise<Product[]> {
        return this.productService.getAllAsync();
    }

    @Get(':id')
    getOne(@Param('id') id: string): Promise<Product> {
        return this.productService.getOneByIdAsync(id);
    }

    @Roles(Role.Admin)
    @Delete(':id')
    delete(@Param('id') id: string): Promise<Product> {
        return this.productService.deleteByIdAsycn(id);
    }
}
