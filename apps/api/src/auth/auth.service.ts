import { Injectable } from '@nestjs/common';
import { AuthPasswrlessDto } from '../mail/dto/AuthPasswrlessDto.dto';

@Injectable()
export class AuthService {
    generateUniqueCode(user:string, email:string): string {
        return '';
    }
    sendAuthEmail(authPasswrlessDto: AuthPasswrlessDto) {
        return this.generateUniqueCode(authPasswrlessDto.user, authPasswrlessDto.email);
    }
}
