import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';
import { AuthPasswrlessDto } from './dto/AuthPasswrlessDto.dto';

@Controller('mail')
export class MailController {
    constructor(private readonly mailService: MailService) {}

    @Post('/sendAuthEmail')
    sendAuthEmail(@Body() authPasswrlessDto: AuthPasswrlessDto) {
        return this.mailService.sendAuthEmail(authPasswrlessDto);
    }

}
