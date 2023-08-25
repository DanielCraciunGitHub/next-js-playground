"use client"

import { signOut, useSession } from "next-auth/react"

import { Button } from "@/components/ui/button"

export const SignOutButton = () => {
  const { data: session } = useSession()

  return (
    <>
      <div>{session?.user.name}</div>
      <Button variant="secondary" onClick={() => signOut()}>
        Sign out
      </Button>
    </>
  )
}
