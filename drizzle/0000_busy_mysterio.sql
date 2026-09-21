CREATE TABLE `learner_settings` (
	`user_id` text PRIMARY KEY NOT NULL,
	`level` text DEFAULT 'A1' NOT NULL,
	`daily_new` integer DEFAULT 5 NOT NULL,
	`daily_reviews` integer DEFAULT 20 NOT NULL,
	`desired_retention` real DEFAULT 0.9 NOT NULL,
	`dialect` text DEFAULT 'US' NOT NULL,
	`focus` text DEFAULT 'speaking' NOT NULL
);
--> statement-breakpoint
CREATE TABLE `review_events` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text NOT NULL,
	`chunk_id` text NOT NULL,
	`grade` text NOT NULL,
	`response_ms` integer,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_events_user_created` ON `review_events` (`user_id`,`created_at`);--> statement-breakpoint
CREATE TABLE `review_state` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text NOT NULL,
	`chunk_id` text NOT NULL,
	`difficulty` real DEFAULT 5 NOT NULL,
	`stability` real DEFAULT 0 NOT NULL,
	`due_at` integer NOT NULL,
	`reps` integer DEFAULT 0 NOT NULL,
	`lapses` integer DEFAULT 0 NOT NULL,
	`last_grade` text,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `ux_review_user_chunk` ON `review_state` (`user_id`,`chunk_id`);--> statement-breakpoint
CREATE INDEX `idx_review_user_due` ON `review_state` (`user_id`,`due_at`);