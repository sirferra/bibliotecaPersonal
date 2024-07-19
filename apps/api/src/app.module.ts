import { Module } from "@nestjs/common";
import { MailService } from './mail/mail.service';
import { MailController } from './mail/mail.controller';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

@Module({
    imports: [],
    controllers: [MailController, AuthController],
    providers: [MailService, AuthService],
})
export class AppModule { }