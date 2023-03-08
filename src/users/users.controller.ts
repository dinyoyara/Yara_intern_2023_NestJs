import { Controller, Get, UseGuards } from '@nestjs/common';

import { JwtGuard } from '../auth/guard';
import { User } from './user.model';
import { UsersService } from './users.service';

@UseGuards(JwtGuard)
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get()
    getAll(): Promise<User[]> {
        return this.userService.getAll();
    }
}
