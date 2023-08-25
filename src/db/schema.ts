import { relations } from "drizzle-orm"
import { int, mysqlTable, serial, text } from "drizzle-orm/mysql-core"

export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
})

export const userRelations = relations(users, ({ many }) => ({
  post: many(posts),
}))

export const posts = mysqlTable("posts", {
  id: serial("id").primaryKey(),
  content: text("content"),
  userId: int("user_id"),
})

export const postRelations = relations(posts, ({ one }) => ({
  user: one(users, {
    fields: [posts.userId],
    references: [users.id],
  }),
}))
