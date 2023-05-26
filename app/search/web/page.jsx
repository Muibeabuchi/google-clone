import WebSearchResults from "@/components/WebSearchResults";
import Link from "next/link";
import React from "react";

const SearchWebPage = async ({ searchParams: { searchTerm } }) => {
  console.log(searchTerm);
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${searchTerm}`
  );
  if (!response.ok) throw new Error("Failed to fetch the data");
  const data = await response.json();
  const results = data?.items;
  if (!results) {
    return (
      <>
        <div className="flex flex-col justif-center items-center pt-10 ">
          <h1 className="text-3xl mb-4 ">No results Found</h1>
          <p className="text-lg">
            Try Searching for something else or go to home page
            {""}
            <Link href={"/"} className="hover:underline text-blue-500 ml-1">
              Go Home
            </Link>
          </p>
        </div>
      </>
    );
  }
  console.log(data);
  return <>{results && <WebSearchResults results={data} />}</>;
};

export default SearchWebPage;
