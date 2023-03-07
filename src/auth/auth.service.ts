import { Injectable } from '@nestjs/common';

import { User } from 'src/users/user.model';
import { InjectModel } from '@nestjs/sequelize';
import { SignupDto } from './dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User
    ) {}

    async create(value: SignupDto): Promise<User> {
        const user = this.userModel.create(
            {
                name: value.name,
                password: value.password,
                email: value.email,
                role: value.role
            },
            {
                returning: []
            }
        );
        return user;
    }
}
