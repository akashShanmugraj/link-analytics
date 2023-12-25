/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1VCov4Abk0b
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import React, { useState, useEffect } from 'react';

function handleServerResponse(responseobject) {
  // Handle response data
  console.log(response);
  window.alert("Response: " + JSON.stringify(response));
}

function SuccessComponent() {
  return (
    <div style={{ backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px' }}>
      Link successfully created
    </div>
  );
}

function ErrorComponent() {
  return (
    <div style={{ backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px' }}>
      Link Prefix already exists
    </div>
  );
}

function StandardComponent() {
  return (
    <div>
    </div>
  );
}

export default function Component() {
  const [status , setStatus] = useState("empty");
  const [linkprefix, setLinkprefix] = useState("");

  function SuccessComponent() {
    return (
      <div>
      <div style={{ backgroundColor: 'green', color: 'white', padding: '20px', borderRadius: '5px' }}>
        Link successfully created
      </div>
      <p className="text-gray-300 md:text-lg">Your link is ready at: <Link href={`https://link.akashshanmugaraj.com/link/${linkprefix}`}>{`https://link.akashshanmugaraj.com/link/${linkprefix}`}</Link></p>
      </div>
    );
  }

  function handleCreateButtonClick() {
    // Get user input values
    const displayName = document.getElementById("display-name-input").value;
    const redirectLink = document.getElementById("redirect-link-input").value;
    const linkPrefix = document.getElementById("link-prefix-input").value;
  
    // Create payload object
    const payload = {
      displayName,
      redirectLink,
      linkPrefix,
    };
  
    console.log(payload);
  
    // Send POST request to /api/createlinkdata
    fetch("/api/createlinkdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((response) => {
        // Get the status of the API request
        const status = response.status;
        if (status === 200){
          setStatus("success");
          setLinkprefix(linkPrefix);
        } else if (status === 400){
          setStatus("error");
        }
        console.log("Status:", status);
  
        // Handle response data
        console.log(response);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }

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
              id="display-name-input"
              className="block w-full mt-2 rounded-md bg-white text-black px-4 py-2 shadow-md"
              type="text" />
          </label>
          <label className="block text-gray-300 md:text-lg">
            Redirect Link
            <input
              id="redirect-link-input"
              className="block w-full mt-2 rounded-md bg-white text-black px-4 py-2 shadow-md"
              type="text" />
          </label>
          <label className="block text-gray-300 md:text-lg">
            Link Prefix
            <input
              id="link-prefix-input"
              className="block w-full mt-2 rounded-md bg-white text-black px-4 py-2 shadow-md"
              type="text" />
          </label>
          <Button size="large" variant="outline" onClick={handleCreateButtonClick}>
            <Link
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-lg font-medium text-black shadow-lg transition-colors hover:bg-gray-200/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 hover:scale-105 transform transition-transform"
              href="#">
              Create
            </Link>
          </Button>
          <label className="block">
            {status === "success" && <SuccessComponent />}
            {status === "error" && <ErrorComponent />}
            {status === "empty" && <StandardComponent />}
          </label>

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

