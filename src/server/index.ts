import { eq } from "drizzle-orm";
import { z } from "zod";

import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  
});

export type AppRouter = typeof appRouter;