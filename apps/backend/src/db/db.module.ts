import { Module } from '@nestjs/common';
import { DBProvider } from './db.provider';
import { DB_TOKEN } from './db.consts';
@Module({
  providers: [DBProvider],
  exports: [DB_TOKEN],
})
export class DbModule {}
