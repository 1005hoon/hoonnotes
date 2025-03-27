import { relations } from "drizzle-orm";
import { boolean, integer, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { baseColumns } from "../utils/base-schema";
import { users } from "./users";

export const posts = pgTable("posts", {
  ...baseColumns,
  title: text("title").notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(),
  slug: text("slug").unique().notNull(),
  thumbnailImage: text("thumbnail_image"),
  published: boolean("published").default(false).notNull(),
  featured: boolean("featured").default(false).notNull(),
  authorId: uuid("author_id")
    .references(() => users.id)
    .notNull(),
  viewCount: integer("view_count").default(0).notNull(),
  readingTime: integer("reading_time").notNull(),
});

export const postsRelations = relations(posts, ({ one }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id],
  }),
}));
