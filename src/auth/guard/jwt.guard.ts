import { AuthGuard } from '@nestjs/passport';

export class JwtGuard extends AuthGuard('jwt-passport-strategy') {
    constructor() {
        super();
    }
}
