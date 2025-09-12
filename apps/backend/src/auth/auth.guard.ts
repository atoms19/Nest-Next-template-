import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private jwtService: JwtService) {}
   canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    
	 const req=context.switchToHttp().getRequest();
	 const token  = req.cookies?.['access_token']
	 if(!token){
		throw new UnauthorizedException("no token found in cookie")
	 }
	 try {
    this.jwtService.verify(token);
	 return true;
	 } catch (error) {
		throw new UnauthorizedException("invalid token")
	 } 
  }
}
