import { boolean, integer, json, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name:  varchar('name').notNull(),
    email: varchar('email').notNull().unique(),
    imageUrl: varchar('imageUrl'),
    // subscription: boolean('subscription').default(false)
    credits: integer().default(10),
})

export const video_table = pgTable('video_table', {
    id: serial('id').primaryKey(),
    videoId: varchar().notNull(),
    videoData: json(),
    type: varchar(),
    createdBy: varchar().notNull().references(()=>users.email)
})