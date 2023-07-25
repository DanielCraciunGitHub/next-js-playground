import { z } from "zod"

import { emailFormSchema, emailResponseSchema } from "./validations/email"

export async function sendEmail(data: z.infer<typeof emailFormSchema>) {
  const req = await fetch("/api/email", {
    method: "POST",
    body: JSON.stringify(data),
  })
  try {
    const res = emailResponseSchema.parse(await req.json())
    console.log(res.message)

    if (res.status === 200) {
      return true
    }
    return false
  } catch (err: unknown) {
    if (err instanceof z.ZodError) {
      console.log(err.message)
      return false
    }
    return false
  }
}
