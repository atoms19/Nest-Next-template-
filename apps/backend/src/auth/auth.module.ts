import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DbModule } from 'src/db/db.module';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SessionService } from './session/session.service';
import { AuthGuard } from './auth.guard';


@Module({
  imports:[DbModule,UserModule,JwtModule.registerAsync({
   imports:[ConfigModule],
   useFactory: async (configService:ConfigService) => ({
     secret: configService.get<string>('JWT_SECRET'),
	  signOptions:{
		 expiresIn:'15m'
		}
  }),
  inject:[ConfigService]
  })],
  exports:[AuthGuard,AuthService,JwtModule],
  controllers: [AuthController],
  providers: [AuthService, SessionService,AuthGuard],
})
export class AuthModule {}
