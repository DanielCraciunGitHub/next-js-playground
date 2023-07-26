"use client"

import { Button } from "./ui/button"

const RouteHandlerExample = () => {
  const handleClick = async () => {
    await fetch("/api/RouteHandler", {
      method: "GET",
    })
  }

  return <Button onClick={handleClick}>Call Route Handler API</Button>
}

export default RouteHandlerExample
