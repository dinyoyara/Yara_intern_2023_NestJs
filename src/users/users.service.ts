import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { User } from './user.model';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User
    ) {}

    async getAllAsync(): Promise<User[]> {
        return this.userModel.findAll({
            attributes: ['id', 'name', 'email', 'role']
        });
    }

    async deleteByIdAsync(id: string): Promise<User> {
        const user = await this.userModel.findByPk(id);
        await user.destroy();
        delete user.dataValues.password;
        return user;
    }
}
