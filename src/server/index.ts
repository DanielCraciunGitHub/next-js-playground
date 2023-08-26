import { db } from "@/db"
import { users } from "@/db/schema"
import { eq } from "drizzle-orm"
import { z } from "zod"

import { getCurrentUser } from "@/lib/auth/session"

import { publicProcedure, router } from "./trpc"

export const appRouter = router({
  getUser: publicProcedure.query(async () => {
    return await getCurrentUser()
  }),
  becomeAdmin: publicProcedure
    .input(z.object({ id: z.string(), isAdmin: z.boolean() }))
    .mutation(async ({ input }) => {
      await db
        .update(users)
        .set({ isAdmin: !input.isAdmin })
        .where(eq(users.id, input.id))
      return true
    }),
})

export type AppRouter = typeof appRouter
