import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    if (process.env.NODE_ENV === 'production') {
      if (request.headers.domain) {
        return true;
      }
      
      throw new UnauthorizedException();
    }

    return true;
  }
}