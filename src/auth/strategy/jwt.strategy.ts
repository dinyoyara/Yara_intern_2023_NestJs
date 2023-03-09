import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/sequelize';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { User } from '../../users/user.model';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
        config: ConfigService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get('JWT_SECRET')
        });
    }

    async validate(payload: { id: string }) {
        const user = await this.userModel.findByPk(payload.id);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...result } = user.dataValues;
        return result;
    }
}
