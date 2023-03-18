import { Controller, Get, Render, Res, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { TimingInterceptor } from './interceptors/processing-time.interceptor';

@Controller()
@UseInterceptors(TimingInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('content/index')
  getIndex() {
    return { tittle: 'Index page!' };
  }

  @Get('/login')
  @Render('content/login')
  getLoginPage() {
    return { tittle: 'Login page!' };
  }

  @Get('/register')
  @Render('content/register')
  getRegisterPage() {
    return { tittle: 'Register page!' };
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
