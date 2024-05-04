import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const connection = neon(process.env.DRIZZLE_DATABASE_URL!);
export const db = drizzle(connection);
