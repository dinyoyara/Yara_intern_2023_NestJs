import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { User } from 'src/users/user.model';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
    imports: [SequelizeModule.forFeature([User])],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}
