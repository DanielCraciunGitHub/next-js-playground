import { createEnv } from "@t3-oss/env-nextjs"
import dotenv from "dotenv"
import { z } from "zod"

dotenv.config({ path: ".env.local" })

export const env = createEnv({
  client: {
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
    NEXT_PUBLIC_SUPABASE_ACCESS_TOKEN: z.string().min(1),
    NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z.string().min(1),
  },
  server: {
    RECAPTCHA_SECRET_KEY: z.string().min(1),

    NEXT_PRIVATE_SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),

    GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY: z.string().min(1),
    GOOGLE_SERVICE_ACCOUNT_EMAIL: z.string().email(),

    NODEMAILER_EMAIL: z.string(),
    NODEMAILER_PASSWORD: z.string(),

    DISCORD_WEBHOOK_URL: z.string().min(1),

    UPSTASH_REDIS_REST_URL: z.string().min(1),
    UPSTASH_REDIS_REST_TOKEN: z.string().min(1),

    PLANET_SCALE_DATABASE_URL: z.string().min(1),

    NEXTAUTH_SECRET: z.string().min(1),
    NEXTAUTH_URL: z.string().min(1),

    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_SUPABASE_ACCESS_TOKEN:
      process.env.NEXT_PUBLIC_SUPABASE_ACCESS_TOKEN,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  },
})
