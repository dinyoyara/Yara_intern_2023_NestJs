import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/sequelize';

import { User } from '../../users/user.model';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt-passport-strategy') {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
        confige: ConfigService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: confige.get('JWT_SECRET')
        });
    }

    async validate(payload: { id: string; role: string }) {
        const user = await this.userModel.findByPk(payload.id);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...result } = user;
        return result;
    }
}
