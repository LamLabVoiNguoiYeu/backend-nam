import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Request, Response } from 'express';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async signup(dto: CreateAuthDto) {
    throw new NotImplementedException();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async signin(dto: CreateAuthDto, req: Request, res: Response) {
    throw new NotImplementedException();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async signout(req: Request, res: Response) {
    throw new NotImplementedException();
  }
}
