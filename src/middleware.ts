import { NextRequest, NextResponse } from "next/server"
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  if (req.nextUrl.pathname === "/") {
    const { data, error } = await supabase.from("todos").select("*")
    console.log("Middleware intercepted data: ", data)
  }

  return res
}
