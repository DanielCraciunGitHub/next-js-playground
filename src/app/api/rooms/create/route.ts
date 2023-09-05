import { db } from "@/db"
import { chatRoom } from "@/db/schema"
import { eq } from "drizzle-orm"
import { nanoid } from "nanoid"

export async function GET() {
  const id = nanoid()

  await db.insert(chatRoom).values({
    id,
  })
  const [room] = await db
    .select({ id: chatRoom.id })
    .from(chatRoom)
    .where(eq(chatRoom.id, id))

  return new Response(room.id)
}
