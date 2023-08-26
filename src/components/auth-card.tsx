"use client"

import { Activity } from "lucide-react"
import { signIn } from "next-auth/react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"

export const AuthCard = () => {
  return (
    <Card className="flex w-full max-w-sm flex-col px-8 py-10">
      <CardTitle className="pb-1">Welcome back</CardTitle>
      <CardDescription className="pb-8">Sign in to continue</CardDescription>
      <div className="flex flex-col space-y-2">
        <Button
          variant="outline"
          className="space-x-4 px-10"
          onClick={() => signIn("google")}
        >
          <Activity />
          <span className="text-xs sm:text-sm">Continue with Google</span>
        </Button>
        <Button
          variant="outline"
          className="space-x-4 px-10"
          onClick={() =>
            signIn("email", { email: "danielcraciun9174@gmail.com" })
          }
        >
          <Activity />
          <span className="text-xs sm:text-sm">Continue with Email</span>
        </Button>
      </div>
    </Card>
  )
}
