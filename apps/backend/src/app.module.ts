import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { GuardsModule } from './guards/guards.module';

@Module({
  imports: [
    UserModule,
    DbModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    GuardsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
