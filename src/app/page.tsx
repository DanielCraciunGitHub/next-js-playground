import ClientComponentExample from "@/components/ClientComponentExample"
import RouteHandlerExample from "@/components/RouteHandlerExample"
import ServerActionExample from "@/components/ServerActionExample"
import ServerComponentExample from "@/components/ServerComponentExample"

const page = async () => {
  return (
    <main className="flex flex-grow flex-col items-center justify-center space-y-10">
      <ClientComponentExample />
      <ServerComponentExample />
      <RouteHandlerExample />
      <ServerActionExample />
    </main>
  )
}

export default page
