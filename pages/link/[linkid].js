import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import NextLink from "next/link" // Rename imported Link to NextLink

const MyLink = () => { // Rename your component to MyLink
  const router = useRouter()
  const { linkid } = router.query
  var [apidata, setApidata] = useState(null); // initialize with null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/getlinkdata/?prefix=${linkid}`)
        if (response.ok) {
          const data = await response.json()
          // console.log(data)
          if (Array.isArray(data) && data.length > 0) {
            setApidata(data[0]) // set the state variable
            setTimeout(() => {
              window.location.href = data[0].redirectlink;
            }, 3000); // Redirect after 2 seconds
          } else {
            console.error('No data returned from API')
          }
        } else {
          console.error('Failed to fetch link data')
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }
    
    fetchData()
  }, [linkid]) // add linkid as a dependency
  console.log("IN NEXT")
  console.log(apidata)

  if (!apidata){
    apidata = {
      "linkprefix": "loading",
      "displayname": " ",
      "redirectlink": "about:blank"
    }
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
          <h1 className="text-6xl font-bold text-white">Redirecting you to {apidata.displayname}...</h1>
          <p className="text-gray-300 md:text-lg">If you are not redirected automatically, click the button below.</p>
          <Button size="large" variant="">
            <NextLink
              className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-8 text-lg font-medium text-black shadow transition-colors hover:bg-gray-200/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
              href={apidata.redirectlink}>
              Proceed to {apidata.displayname}
            </NextLink>
          </Button>
        </div>
      </main>
      <footer
        className="flex flex-col gap-2 py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#1a1a1a] bg-[#1a1a1a]">
        <p className="text-base text-gray-400">
          Create more links and analytics like these at links.akashshanmugaraj.com
        </p>
        <NextLink
          className="text-xs hover:underline underline-offset-4 text-gray-300"
          href="mailto:contact@akashshanumgaraj.com">
          Report this link
        </NextLink>
      </footer>
    </div>)
  );
}

export default MyLink