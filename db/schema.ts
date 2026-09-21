import { integer, real, sqliteTable, text, uniqueIndex, index } from "drizzle-orm/sqlite-core";

export const learnerSettings = sqliteTable("learner_settings", {
  userId: text("user_id").primaryKey(),
  level: text("level").notNull().default("A1"),
  dailyNew: integer("daily_new").notNull().default(5),
  dailyReviews: integer("daily_reviews").notNull().default(20),
  desiredRetention: real("desired_retention").notNull().default(0.9),
  dialect: text("dialect").notNull().default("US"),
  focus: text("focus").notNull().default("speaking"),
});

export const reviewState = sqliteTable("review_state", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("user_id").notNull(),
  chunkId: text("chunk_id").notNull(),
  difficulty: real("difficulty").notNull().default(5),
  stability: real("stability").notNull().default(0),
  dueAt: integer("due_at", { mode: "timestamp_ms" }).notNull(),
  reps: integer("reps").notNull().default(0),
  lapses: integer("lapses").notNull().default(0),
  lastGrade: text("last_grade"),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
}, (t) => [uniqueIndex("ux_review_user_chunk").on(t.userId, t.chunkId), index("idx_review_user_due").on(t.userId, t.dueAt)]);

export const reviewEvents = sqliteTable("review_events", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("user_id").notNull(),
  chunkId: text("chunk_id").notNull(),
  grade: text("grade").notNull(),
  responseMs: integer("response_ms"),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
}, (t) => [index("idx_events_user_created").on(t.userId, t.createdAt)]);
