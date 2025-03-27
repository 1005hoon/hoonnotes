import { relations } from "drizzle-orm";
import { boolean, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { baseColumns } from "../utils/base-schema";
import { users } from "./users";

export const projects = pgTable("projects", {
  ...baseColumns,
  name: text("name").notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(),
  githubUrl: text("github_url"),
  websiteUrl: text("website_url"),
  thumbnailUrl: text("thumbnail_url"),
  published: boolean("published").default(false).notNull(),
  authorId: uuid("author_id")
    .references(() => users.id)
    .notNull(),
  featured: boolean("featured").default(false).notNull(),
  startDate: timestamp("start_date"),
  endDate: timestamp("end_date"),
});

export const projectsRelations = relations(projects, ({ one }) => ({
  author: one(users, {
    fields: [projects.authorId],
    references: [users.id],
  }),
}));

export type Project = typeof projects.$inferSelect;
