import { Injectable, NotImplementedException } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  signup(_dto: AuthDto) {
    throw new NotImplementedException();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  signin(_dto: AuthDto, _req: any, _res: any) {
    throw new NotImplementedException();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  signout(_req: any, _res: any) {
    throw new NotImplementedException();
  }
}
