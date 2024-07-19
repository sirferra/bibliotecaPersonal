import { Injectable } from '@nestjs/common';
import { AuthPasswrlessDto } from './dto/AuthPasswrlessDto.dto';
import * as nodemailer from 'nodemailer';
import {AuthService } from '../auth/auth.service';

const {API_EMAIL_SENDER,
API_EMAIL_PASSWORD,
API_EMAIL_SMTP,
API_EMAIL_PORT,
API_EMAIL_SECURE} = process.env;

@Injectable()
export class MailService {
    constructor(private readonly authService:AuthService) {}

    transporter = nodemailer.createTransport({
        host: API_EMAIL_SMTP,
        port: API_EMAIL_PORT,
        secure: API_EMAIL_SECURE,
        auth: {
            user: API_EMAIL_SENDER,
            pass: API_EMAIL_PASSWORD
        }
    });

    sendAuthEmail(authPasswrlessDto: AuthPasswrlessDto) {

        this.authService.generateUniqueCode(authPasswrlessDto.user, authPasswrlessDto.email);

        // this.transporter.sendMail({
        //     from: '"Biblioteca Personal" <login@bibliotecapersonal.dev>',
        //     to: authPasswrlessDto.email,
        //     subject: 'Tu código de inicio de sesión',
        //     html: `<h1>Tu código de inicio de sesión es:</h1><div><p>${}<p></div>`
        // })
    }
   
}
