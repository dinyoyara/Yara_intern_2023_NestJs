import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'src/users/user.model';

import { AuthService } from './auth.service';
import { SigninDto, SignupDto, TokenDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    singup(@Body() dto: SignupDto): Promise<User> {
        return this.authService.createAsync(dto);
    }

    @Post('signin')
    sigin(@Body() dto: SigninDto): Promise<TokenDto> {
        return this.authService.loginAsync(dto);
    }
}
