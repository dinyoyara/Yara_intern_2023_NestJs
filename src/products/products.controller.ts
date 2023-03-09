import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { Role } from 'src/auth/data';
import { Roles } from 'src/auth/decorator';
import { ProductDto } from './dto';
import { Product } from './product.model';
import { ProductsService } from './products.service';

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
}
