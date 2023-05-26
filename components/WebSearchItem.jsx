import Link from "next/link";
import React from "react";
import parse from "html-react-parser";

const WebSearchItem = ({ result }) => {
  console.log(result?.link);
  return (
    <div className="mb-8 max-w-xl">
      <div className="group flex flex-col justify-center">
        <Link className="text-sm truncate" href={`${result?.link}`}>
          {result?.formattedUrl}
        </Link>
        <Link
          className="group-hover:underline decoration-blue-500 text-xl truncate font-medium text-blue-800"
          href={result?.link}
        >
          {result?.title}
        </Link>
      </div>
      <p className="text-gray-600 ">{parse(result?.htmlSnippet)}</p>
    </div>
  );
};

export default WebSearchItem;
