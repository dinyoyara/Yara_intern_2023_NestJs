import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/user.model';
import { UsersModule } from './users/users.module';

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
        UsersModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
