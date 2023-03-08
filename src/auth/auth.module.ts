import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';

import { User } from 'src/users/user.model';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
    imports: [SequelizeModule.forFeature([User]), JwtModule.register({})],
    controllers: [AuthController],
    providers: [AuthService, JwtService, ConfigService]
})
export class AuthModule {}
