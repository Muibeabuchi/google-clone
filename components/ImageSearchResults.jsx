import Link from "next/link";
import React from "react";

const ImageSearchResults = ({ results }) => {
  //   console.log(results);

  return (
    <div className="pt-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results.map((result) => (
          <div key={result.link} className="mb-8">
            <div className="group">
              <Link href={result?.image?.contextLink}>
                <img
                  src={result?.link}
                  alt={result?.title}
                  className="h-60 w-full group-hover:shadow-xl object-contain transition-shadow"
                />
              </Link>
              <Link href={result?.image?.contextLink}>
                <h2 className="group-hover:underline truncate text-xl ">
                  {result?.title}
                </h2>
              </Link>
              <Link href={result?.image?.contextLink}>
                <p className="group-hover:underline text-gray-600">
                  {result?.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSearchResults;
