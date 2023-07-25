import { FC } from "react"

import ContactForm from "@/components/ContactForm"

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main className="flex flex-grow flex-col items-center justify-center">
      <div className="space-y-4">
        <h1 className="text-4xl">Contact Us</h1>
        <ContactForm />
      </div>
    </main>
  )
}

export default page
