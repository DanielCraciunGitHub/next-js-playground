import { FC } from "react"

import { DarkModeButton } from "@/components/DarkModeButton"

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="container flex flex-grow flex-col items-center justify-center space-y-5">
      <h1 className="text-4xl">Welcome</h1>
      <div>
        this is a template powered by the shadcn ui library for people lazy to
        do their own css.
      </div>
      <DarkModeButton />
    </div>
  )
}

export default page
