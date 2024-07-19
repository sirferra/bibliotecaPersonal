import {IsString} from 'class-validator';

export class AuthPasswrlessDto{
    @IsString()
    readonly user:string
    @IsString()
    readonly email:string
}