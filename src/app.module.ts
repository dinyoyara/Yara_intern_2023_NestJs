import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

import { User } from './users/user.model';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { Product } from './products/product.model';
import { Supplier } from './suppliers/suppliers.model';

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'dinyoyara',
            database: 'nest.api',
            autoLoadModels: true,
            synchronize: true,
            models: [User, Supplier, Product]
        }),
        ConfigModule.forRoot({
            isGlobal: true
        }),
        UsersModule,
        AuthModule,
        ProductsModule,
        SuppliersModule
    ]
})
export class AppModule {}
