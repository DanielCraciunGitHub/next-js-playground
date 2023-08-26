import { relations } from "drizzle-orm"
import { mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core"

export const chatRoom = mysqlTable("chatRoom", {
  id: varchar("id", { length: 255 }).primaryKey(),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").onUpdateNow(),
})

export const messages = mysqlTable("messages", {
  id: varchar("id", { length: 255 }).primaryKey(),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").onUpdateNow(),
  text: varchar("text", { length: 255 }).notNull(),
  chatRoomId: varchar("chatRoomId", { length: 255 }).notNull(),
})

export const chatRoomRelations = relations(chatRoom, ({ many }) => ({
  message: many(messages),
}))

export const messageRelations = relations(messages, ({ one }) => ({
  chatRoom: one(chatRoom, {
    fields: [messages.chatRoomId],
    references: [chatRoom.id],
  }),
}))
