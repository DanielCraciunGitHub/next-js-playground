"use client"

import { signOut } from "next-auth/react"

import { Button } from "@/components/ui/button"
import { trpc } from "@/app/_trpc/client"
import { serverClient } from "@/app/_trpc/serverClient"

export const SignOutButton = (
  user: NonNullable<Awaited<ReturnType<(typeof serverClient)["getUser"]>>>
) => {
  const getUser = trpc.getUser.useQuery(undefined, {
    initialData: user,
    refetchOnMount: false,
    refetchOnReconnect: false,
  })
  const becomeAdmin = trpc.becomeAdmin.useMutation({
    onSettled: () => {
      getUser.refetch()
    },
  })
  return (
    <div className="flex flex-col">
      <div>{JSON.stringify(getUser.data!.isAdmin)}</div>
      <Button variant="secondary" onClick={() => signOut()}>
        Sign out
      </Button>
      <Button
        variant="secondary"
        onClick={async () => {
          becomeAdmin.mutate({
            id: getUser.data!.id,
            isAdmin: getUser.data!.isAdmin,
          })
        }}
      >
        {getUser.data?.isAdmin ? "Become a user" : "Become an admin"}
      </Button>
    </div>
  )
}
