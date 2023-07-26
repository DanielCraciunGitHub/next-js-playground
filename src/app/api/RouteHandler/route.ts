import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"

export async function GET(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies })

  const { data, error } = await supabase.from("todos").select("*")

  console.log("Route Handler Data: ", data)
  return NextResponse.json({ data } ?? { error })
}
