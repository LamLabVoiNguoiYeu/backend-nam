import { Controller, Get, Render, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { TimingInterceptor } from './interceptors/processing-time.interceptor';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@UseInterceptors(TimingInterceptor)
@ApiTags('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('content/index')
  getIndex() {
    return { tittle: 'Index page!' };
  }

  @Get('/signin')
  @Render('content/signin')
  getLoginPage() {
    return { tittle: 'Signin page!' };
  }

  @Get('/signup')
  @Render('content/signup')
  getRegisterPage() {
    return { tittle: 'Signup page!' };
  }

  @Get('/apple')
  @Render('content/apple')
  getApplePage() {
    return { tittle: 'Apple product page' };
  }

  @Get('/huawei')
  @Render('content/huawei')
  getHuaweiPage() {
    return { tittle: 'Huawei product page' };
  }

  @Get('/samsung')
  @Render('content/samsung')
  getSamsungPage() {
    return { tittle: 'Samsung product page' };
  }

  @Get('/xiaomi')
  @Render('content/xiaomi')
  getXiaomiPage() {
    return { tittle: 'Xiaomi product page' };
  }
}
