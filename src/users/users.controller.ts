import { Controller, Get, Post } from '@nestjs/common';
import { User } from './user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get()
    getAll(): Promise<User[]> {
        return this.userService.getAll();
    }

    @Post()
    create(): Promise<User> {
        return this.userService.create();
    }
}
