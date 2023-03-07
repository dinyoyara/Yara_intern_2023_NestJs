import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
//import { Sequelize } from 'sequelize-typescript';
import { User } from './user.model';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User
    ) {}

    async getAll(): Promise<User[]> {
        return this.userModel.findAll();
    }

    async create(): Promise<User> {
        const user = this.userModel.create({
            name: 'Ivan',
            password: 12345,
            email: 'ivan@test.test'
        });
        return user;
    }
}
