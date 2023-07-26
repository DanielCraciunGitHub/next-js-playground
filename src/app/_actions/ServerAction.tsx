"use server"

import { cookies } from "next/headers"
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"

export const serverAction = async () => {
  const supabase = createServerActionClient({ cookies })
  const { data, error } = await supabase.from("todos").select("*")

  console.log("Server Action data: ", data)
  return data
}
