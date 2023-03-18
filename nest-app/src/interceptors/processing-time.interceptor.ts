import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class TimingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const start = Date.now();

    return next.handle().pipe(
      tap(() => {
        // const end = Date.now();
        const response = context.switchToHttp().getResponse();
        // response.header('X-Server-Response-Time', end - now);
        const loadTime = Date.now() - start;
        response.locals.time = loadTime;
      }),
    );
  }
}
