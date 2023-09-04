import { FC } from "react"

import { Card, CardContent } from "@/components/ui/card"

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <Card className="h-[600px]">
      <CardContent className="flex h-full items-center justify-center">
        This is a not a modal
      </CardContent>
    </Card>
  )
}

export default page
