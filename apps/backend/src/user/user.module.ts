import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DbModule } from 'src/db/db.module';
import { GuardsModule } from 'src/guards/guards.module';

@Module({
  controllers: [UserController],
  imports: [DbModule,forwardRef(()=>GuardsModule)],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
