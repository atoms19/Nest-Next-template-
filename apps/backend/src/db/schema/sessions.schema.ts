import { pgTable, serial, uuid } from "drizzle-orm/pg-core";
import { users } from "./user.schema";
import { timestamp } from "drizzle-orm/pg-core";


export const sessionTable = pgTable('sessions', {
   id:serial('id').primaryKey().notNull(),
	user_id : uuid('user_id').notNull().references(() => users.id),
   token: uuid('token').notNull().defaultRandom(),
   created_at:timestamp('created_at').notNull().defaultNow(),
	expiry: timestamp('expiry').notNull().$defaultFn(()=> new Date(Date.now() + (1000 * 60 * 60 * 24) * 7))
})
