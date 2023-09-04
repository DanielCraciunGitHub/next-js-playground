import { FC } from "react"

import { Card, CardContent } from "@/components/ui/card"
import Modal from "@/components/Modal"

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <Modal>
      <Card className="h-[600px]">
        <CardContent className="flex h-full items-center justify-center">
          This is a modal
        </CardContent>
      </Card>
    </Modal>
  )
}

export default page
