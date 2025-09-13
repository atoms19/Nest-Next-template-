import { varchar } from 'drizzle-orm/pg-core';
import { boolean, uuid } from 'drizzle-orm/pg-core';
import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  password_hash: text('password_hash').notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
  avatar_url: text('avatar_url'),
  bio:varchar('bio', { length: 160 }),
  is_email_verified:boolean('is_email_verified').default(false).notNull(),
});
