"use client"

import { serverAction } from "@/app/_actions/ServerAction"

import { Button } from "./ui/button"

const ServerActionExample = () => {
  const handleClick = async () => {
    const data = await serverAction()
  }

  return <Button onClick={handleClick}>Server Action Button</Button>
}

export default ServerActionExample
