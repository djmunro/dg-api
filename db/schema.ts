import { serial, text, pgTableCreator } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

const pgTable = pgTableCreator((name) => `dgapi_${name}`);

export const discs = pgTable("discs", {
  id: serial("id").primaryKey(),
});

export const insertDiscSchema = createInsertSchema(discs);

export const selectDiscSchema = createSelectSchema(discs);
