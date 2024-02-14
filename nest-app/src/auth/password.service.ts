import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordService {
  private saltOrRounds = 10;

  public async validatePassword(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
  }

  public async hashPassword(password: string) {
    return await bcrypt.hash(password, this.saltOrRounds);
  }
}
