import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class AuthDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  public email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(4, 20, {
    message: 'Password has to be at between 4 to 20 characters',
  })
  public password: string;
}
