import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  client: {},
  server: {
    NODEMAILER_EMAIL: z.string(),
    NODEMAILER_PASSWORD: z.string(),
  },
  experimental__runtimeEnv: {},
})
