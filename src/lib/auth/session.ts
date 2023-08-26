import { db } from "@/db"
import { users } from "@/db/schema"
import { eq } from "drizzle-orm"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth/auth"

export const getSession = async () => {
  const session = await getServerSession(authOptions)

  return session
}

export const getCurrentUser = async () => {
  const session = await getServerSession(authOptions)

  if (!session) {
    return null
  }

  const [currentUser] = await db
    .select({
      id: users.id,
      name: users.name,
      email: users.email,
      image: users.image,
      isAdmin: users.isAdmin,
    })
    .from(users)
    .where(eq(users.id, session.user.id))

  return currentUser
}
