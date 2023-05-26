"use client";

import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearchParams, useRouter } from "next/navigation";

const SearchBox = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");
  function handleSubmit(e) {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 items-center sm:ml-10 sm:mr-5 ml-3 mr-1 flex-grow max-w-3xl "
    >
      <input
        type="text"
        className="w-full focus:outline-none "
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <RxCross2
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2 "
        onClick={() => setTerm("")}
      />
      <BsFillMicFill className="hidden text-4xl text-blue-500 border-l-2 mr-3 border-gray-300 pl-4 sm:inline-flex" />
      <AiOutlineSearch
        onClick={handleSubmit}
        className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
      />
    </form>
  );
};

export default SearchBox;
