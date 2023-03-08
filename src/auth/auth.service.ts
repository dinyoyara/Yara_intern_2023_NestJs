import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { ForbiddenException, Injectable } from '@nestjs/common';

import { User } from 'src/users/user.model';
import { SignupDto, SigninDto, TokenDto } from './dto';
import { hashPasswordAsync, verifyPasswordAsync } from './helpers';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
        private jwt: JwtService,
        private config: ConfigService
    ) {}

    async createAsync(value: SignupDto): Promise<User> {
        const user = await this.userModel.create({
            name: value.name,
            password: await hashPasswordAsync(value.password),
            email: value.email,
            role: value.role
        });

        delete user.dataValues.password;
        delete user.dataValues.deletedAt;
        delete user.dataValues.updatedAt;
        return user;
    }

    async loginAsync(value: SigninDto): Promise<TokenDto> {
        const user = await this.userModel.findOne({ where: { email: value.email } });
        if (!user) throw new ForbiddenException('Email incorrect');

        const correctPassword = await verifyPasswordAsync(value.password, user.password);
        if (!correctPassword) throw new ForbiddenException('Password incorrect');

        return this.signTokenAsync(user.id, user.role);
    }

    private async signTokenAsync(id: string, role: string): Promise<TokenDto> {
        const payload = {
            id: id,
            role: role
        };
        const secret = this.config.get('JWT_SECRET');

        const token = await this.jwt.signAsync(payload, {
            expiresIn: '10m',
            secret: secret
        });

        return { token: token };
    }
}
