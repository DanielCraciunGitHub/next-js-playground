import Link from "next/link"

export default async function Home() {
  return (
    <main className="flex grow">
      <Link className="text-blue-500" href="/intercept">
        Go to intercept
      </Link>
    </main>
  )
}
