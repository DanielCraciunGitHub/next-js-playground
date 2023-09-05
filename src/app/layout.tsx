import "@/styles/globals.css"

import { Inter } from "next/font/google"

import { DarkModeButton } from "@/components/DarkModeButton"
import { Provider } from "@/components/providers"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex min-h-screen flex-col">
        <Provider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <DarkModeButton />
        </Provider>
      </body>
    </html>
  )
}
