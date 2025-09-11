import { timestamp } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';
import { users } from './user.schema';
import { uuid } from 'drizzle-orm/pg-core';

export const matchesTable = pgTable('matches', {
  id: uuid('id').primaryKey().defaultRandom().notNull(),
  user1: uuid('user_1')
    .notNull()
    .references(() => users.id),
  user2: uuid('user_2')
    .notNull()
    .references(() => users.id),
  date: timestamp('matched_at').notNull().defaultNow(),
});
