import { db } from "@/db"
import { messages } from "@/db/schema"
import { nanoid } from "nanoid"

import { pusherServer } from "@/lib/pusherServer"

export async function POST(req: Request) {
  const { text, roomId } = await req.json()

  pusherServer.trigger(roomId, "incoming-message", text)

  await db.insert(messages).values({ id: nanoid(), text, chatRoomId: roomId })

  return new Response(JSON.stringify({ success: true }))
}
