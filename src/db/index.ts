import { config as loadEnv } from 'dotenv';
import { drizzle } from 'drizzle-orm/neon-http';

loadEnv({ path: ['.env.local', '.env', 'src/.env'] });

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error(
    'DATABASE_URL is missing. Set it in .env.local, .env, or src/.env before connecting to the database.',
  );
}

export const db = drizzle(databaseUrl);