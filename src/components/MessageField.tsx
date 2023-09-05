"use client"

import { FC } from "react"

interface MessageFieldProps {
  roomId: string
}

const MessageField: FC<MessageFieldProps> = ({ roomId }) => {
  let input = ""

  const sendMessage = async (text: string) => {
    await fetch("/api/message", {
      method: "POST",
      body: JSON.stringify({ text, roomId }),
    })
  }

  return (
    <div className="flex gap-2">
      type a new message:
      <input
        onChange={({ target }) => (input = target.value)}
        className="border border-zinc-300"
        type="text"
      />
      <button onClick={() => sendMessage(input || "")}>send</button>
    </div>
  )
}

export default MessageField