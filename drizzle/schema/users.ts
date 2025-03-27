import { relations } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";
import { baseColumns } from "../utils/base-schema";
import { accounts } from "./accounts";

export const users = pgTable("users", {
  ...baseColumns,
  name: text("name"),
  email: text("email").unique().notNull(),
  nickname: text("nickname").unique().notNull(),
  avatarUrl: text("avatar_url"),
  role: text("role").default("user").notNull(), // "user" | "admin"
  bio: text("bio"),
});

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
}));

export type User = typeof users.$inferSelect;
