import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from './schema/schema';

export type DB = NodePgDatabase<typeof schema>;

export const DB_TOKEN = 'DB_TOKEN';
