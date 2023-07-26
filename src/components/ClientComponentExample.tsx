"use client"

import { useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

import { Button } from "./ui/button"

const ClientComponentExample = () => {
  const supabase = createClientComponentClient()

  const [data, setData] = useState()

  const handleClick = async () => {
    const { data, error } = await supabase.from("todos").select("*")
    setData(JSON.stringify(data))
  }

  return (
    <Button onClick={handleClick}>{data ? data : "Client Component"}</Button>
  )
}

export default ClientComponentExample
