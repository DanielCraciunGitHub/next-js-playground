RENAME TABLE `message` TO `messages`;--> statement-breakpoint
ALTER TABLE `chatRoom` ADD PRIMARY KEY(`id`);--> statement-breakpoint
ALTER TABLE `messages` ADD PRIMARY KEY(`id`);