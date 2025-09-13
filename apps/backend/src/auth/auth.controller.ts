import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import type { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService:AuthService){}

  @Post('login')
  async login(@Res() res:Response,@Body() loginDto:LoginDto) {
		  let {accessToken,refreshToken}= await this.authService.login(loginDto);
		  res.cookie('access_token',accessToken,{
			  httpOnly:true,
			  secure:true,
			  sameSite:'strict',
			  maxAge:(1000*60*60*24)*7
		  })

		  res.cookie('refresh_token',refreshToken,{
			  httpOnly:true,
			  secure:true,
			  sameSite:'strict',
			  maxAge:(1000*60*60*24)*30
		  })

		  return res.send({message:'login successful'});
  }

  @Get('logout')
  async logout(@Res() res:Response){
	 res.clearCookie('access_token')
	 res.clearCookie('refresh_token')

	return res.send({message:'logged out'})
  }

  @Post('verify')
  async verifyToken(@Body('token') token:string){
	  return this.authService.verifyToken(token)
	}

}
