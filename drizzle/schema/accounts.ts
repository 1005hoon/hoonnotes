import { relations } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { baseColumns } from "../utils/base-schema";
import { users } from "./users";

export const accounts = pgTable("accounts", {
  ...baseColumns,
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  type: text("type").notNull(), // "oauth" | "credentials"
  provider: text("provider").notNull(), // "google" | "github"
  providerAccountId: text("provider_account_id").notNull(),
});

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, {
    fields: [accounts.userId],
    references: [users.id],
  }),
}));
