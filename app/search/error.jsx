"use client";

import React, { useEffect } from "react";

const SearchError = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="flex flex-col justif-center items-center pt-10 ">
      <h1 className="text-3xl mb-4 ">Something went wrong!</h1>
      <button
        onClick={reset}
        className="text-gray-500 px-2 py-1 bg-blue-300 hover:bg-blue-200 rounded-lg"
      >
        Try Again
      </button>
    </div>
  );
};

export default SearchError;
