import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex flex-col justify-center h-full text-center max-w-5xl gap-6 mx-auto">
      <h1 className="text-5xl font-bold">
        Invoicipedia
      </h1>
      <p>
        <Button asChild>
          <Link href="/dashboard">
            Sing in
          </Link>
        </Button>
      </p>
    </main>
  );
}
