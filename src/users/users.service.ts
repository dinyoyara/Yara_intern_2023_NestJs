import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { User } from './user.model';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User
    ) {}

    async getAll(): Promise<User[]> {
        return this.userModel.findAll({
            attributes: ['id', 'name', 'email']
        });
    }
}
