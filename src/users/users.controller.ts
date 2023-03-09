import { Controller, Get, UseGuards, Param, Delete } from '@nestjs/common';

import { User } from './user.model';
import { Role } from '../auth/data';
import { JwtGuard, RolesGuard } from '../auth/guard';
import { UsersService } from './users.service';
import { Roles } from '../auth/decorator';

@UseGuards(JwtGuard, RolesGuard)
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get()
    getAll(): Promise<User[]> {
        return this.userService.getAllAsync();
    }

    @Roles(Role.Admin)
    @Delete(':id')
    deleteById(@Param('id') id: string): Promise<User> {
        return this.userService.deleteByIdAsync(id);
    }
}
