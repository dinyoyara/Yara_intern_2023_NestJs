import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/user.model';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { SuppliersModule } from './suppliers/suppliers.module';

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
            models: [User]
        }),
        ConfigModule.forRoot({
            isGlobal: true
        }),
        UsersModule,
        AuthModule,
        ProductsModule,
        SuppliersModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
