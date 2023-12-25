/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1VCov4Abk0b
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    (<div key="1" className="flex flex-col min-h-screen bg-black text-white">
      <header
        className="px-4 lg:px-6 h-20 flex items-center justify-between bg-[#1a1a1a]">
        <span className="text-4xl font-bold text-white">Link Analytics by Akash Shanmugaraj</span>
        <img
          alt="User profile"
          className="rounded-full"
          height="40"
          src="/hero.svg"
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
          width="40" />
      </header>
      <main className="flex-1 flex items-center justify-center bg-black">
        <div className="space-y-6 text-left">
          <h1 className="text-4xl font-bold text-white">Create a Link Tracker</h1>
          <h3 className="text-lg font-light text-white">🤫 dont tell anyone about this</h3>
          <label className="block text-gray-300 md:text-lg">
            Display Name (eg. Akash's LinkedIn)
            <input
              className="block w-full mt-2 rounded-md bg-white text-black px-4 py-2 shadow-md"
              type="text" />
          </label>
          <label className="block text-gray-300 md:text-lg">
            Redirect Link
            <input
              className="block w-full mt-2 rounded-md bg-white text-black px-4 py-2 shadow-md"
              type="text" />
          </label>
          <label className="block text-gray-300 md:text-lg">
            Link Prefix
            <input
              className="block w-full mt-2 rounded-md bg-white text-black px-4 py-2 shadow-md"
              type="text" />
          </label>
          <Button size="large" variant="outline">
            <Link
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-lg font-medium text-black shadow-lg transition-colors hover:bg-gray-200/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 hover:scale-105 transform transition-transform"
              href="#">
              Create
            </Link>
          </Button>
        </div>
      </main>
      <footer
        className="flex flex-col gap-2 py-6 w-full shrink-0 items-start px-4 md:px-6 border-t border-[#1a1a1a] bg-[#1a1a1a]">
        <Link
          className="text-xs hover:underline underline-offset-4 text-gray-300 "
          href="#">
          Contact  |  Privacy
        </Link>
      </footer>
    </div>)
  );
}

