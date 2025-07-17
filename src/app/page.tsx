import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <span className="sr-only">RSVT</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {/* Placeholder for future navigation */}
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center p-4">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            RSVT
          </h1>
          <p className="text-lg md:text-xl text-foreground">
            Ram Ram
          </p>
        </div>
        <nav className="mt-8">
          <Link
            href="/api-docs"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            API Documentation
          </Link>
        </nav>
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p className="text-foreground">© {new Date().getFullYear()} RSVT. All rights reserved.</p>
      </footer>
    </div>
  );
}