import * as z from "zod"

export const emailResponseSchema = z.object({
  message: z.string(),
  status: z.number(),
})
export const emailFormSchema = z.object({
  name: z.string().min(1, { message: "Enter your name" }),
  email: z.string().email().max(320, { message: "Invalid email length" }),
  message: z
    .string()
    .min(1, { message: "Enter your message" })
    .max(1200, { message: "Message is too long" }),
})
