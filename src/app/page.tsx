import { db } from "@/db"
import { users } from "@/db/schema"

export default async function page() {
  const dbUsers = await db.select().from(users)

  const createUser = async () => {
    "use server"

    await db.insert(users).values({ name: "John Doe" })
  }

  return (
    <>
      <p>my users:</p>
      {dbUsers.map((users) => (
        <div key={users.id}>{users.name}</div>
      ))}

      <form action={createUser}>
        <button>create user</button>
      </form>
    </>
  )
}
