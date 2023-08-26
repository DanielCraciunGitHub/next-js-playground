import { AuthCard } from "@/components/auth-card"
import { SignOutButton } from "@/components/sign-out-button"

import { serverClient } from "./_trpc/serverClient"

export default async function Home() {
  const user = await serverClient.getUser()
  return (
    <main className="bg-dark flex min-h-screen items-center justify-center text-white">
      {!user ? <AuthCard /> : <SignOutButton {...user} />}
    </main>
  )
}
