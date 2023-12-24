import Image from 'next/image'
import { landing } from '@/components/landing'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home(dataobject) {
  let propobject = {
    displayname:"Akash Shanmugaraj's GitHub",
    redirectlink:"https://www.github.com/akashshanmugraj",
    redirectlinkdomain:"github.com"
  }
  return (
    (<div key="1" className="flex flex-col min-h-screen bg-black text-white">
      <header
        className="px-4 lg:px-6 h-14 flex items-center justify-center bg-[#1a1a1a]">
        <span className="text-xs font-light text-center">
          {`\n      Hosted with ❤\u{fe0f} by @akashshanmugaraj | frontend using v0.dev\n    `}
        </span>
      </header>
      <main className="flex-1 flex items-center justify-center bg-black">
        <div className="space-y-6 text-center">
          <h1 className="text-6xl font-bold text-white">Redirecting you to {propobject.displayname}...</h1>
          <p className="text-gray-300 md:text-lg">If you are not redirected automatically, click the button below.</p>
          <Button size="large" variant="">
            <Link
              className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-8 text-lg font-medium text-black shadow transition-colors hover:bg-gray-200/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
              href={propobject.redirectlink}>
              Proceed to {propobject.redirectlinkdomain}
            </Link>
          </Button>
        </div>
      </main>
      <footer
        className="flex flex-col gap-2 py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#1a1a1a] bg-[#1a1a1a]">
        <p className="text-base text-gray-400">
          Create more links and analytics like these at links.akashshanmugaraj.com
        </p>
        <Link
          className="text-xs hover:underline underline-offset-4 text-gray-300"
          href="mailto:contact@akashshanumgaraj.com">
          Report this link
        </Link>
      </footer>
    </div>)
  );
}
