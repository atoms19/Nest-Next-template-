import type { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { DB_TOKEN } from './db.consts';
import * as schema from './schema/schema';

export const DBProvider: Provider = {
  inject: [ConfigService],
  provide: DB_TOKEN,
  useFactory: (configService: ConfigService) => {
    const dbcon = drizzle(
      {
        connection: {
          connectionString: configService.get<string>('DATABASE_URL'),
          ssl: false,
        },
      },
      {
        schema: schema,
      },
    );
    return dbcon;
  },
};
