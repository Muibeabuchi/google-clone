"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { getRandomWord } from "@/utils/helperFunctions";

const HomeSearch = () => {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [randomWordLoading, setRandomWordLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };
  const randomSearch = async () => {
    setRandomWordLoading(true);
    const randomWord = await getRandomWord();
    setRandomWordLoading(false);
    if (!randomWord) return;
    router.push(`/search/web?searchTerm=${randomWord}`);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl"
        id="search-bar"
      >
        <AiOutlineSearch className="text-lg text-gray-500 mr-3 " />
        <input
          type="text"
          className="w-full focus:outline-none "
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
      <div className="flex flex-col space-y-2 mt-4 sm:mt-8 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row">
        <button type="submit" form="search-bar" className="btn">
          Google Search
        </button>
        <button
          className="btn flex justify-center items-center disabled:opacity-80"
          onClick={randomSearch}
          disabled={randomWordLoading}
        >
          {randomWordLoading ? (
            <img
              className="text-sm h-10"
              src={"/spinner-google.svg"}
              alt="loading spinner"
            />
          ) : (
            " I Am Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
};

export default HomeSearch;
