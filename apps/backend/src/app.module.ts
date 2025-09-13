import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule,
    DbModule,
	 JwtModule.registerAsync({
   imports:[ConfigModule],
   useFactory: async (configService:ConfigService) => ({
     secret: configService.get<string>('JWT_SECRET'),
	  signOptions:{
		 expiresIn:'15m'
		}
  }),
  inject:[ConfigService]
  }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
