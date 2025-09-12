import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { SessionService } from './session/session.service';

@Injectable()
export class AuthService {
	constructor(
		private readonly jwtService: JwtService,
		private readonly userService: UserService,
		private readonly sessionService: SessionService) { }

	async login(loginDto: LoginDto) {
		let [user] = await this.userService.findByEmail(loginDto.email)
		if (!user) {
			throw new NotFoundException('user not found ');
		}
		if (user.password_hash !== loginDto.password) {
			throw new UnauthorizedException('invalid password');
		}

		let session = await this.sessionService.createSession(user.id);

		return {
			refreshToken: session.token,
			accessToken: this.jwtService.sign({
				userId: user.id,
				email: user.email,
				name: user.name
			})
		}
	}
}
