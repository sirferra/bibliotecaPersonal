import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthPasswrlessDto } from '../mail/dto/AuthPasswrlessDto.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonlyauthService: AuthService) {}

    @Post
    sendAuthEmail(@Body() authPasswrlessDto: AuthPasswrlessDto) {
        return this.authService.sendAuthEmail(authPasswrlessDto);
    }
    
}
