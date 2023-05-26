import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";

const SearchHeader = () => {
  return (
    <header className="sticky top-0 bg-white w-full ">
      <div className="flex w-full p-3 sm:p-6 items-center justify-between">
        <Link href={"/"}>
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
            }
            alt="google logo"
            width={"120"}
            height={"40"}
            className="w-[55px] sm:w-[85px]"
          />
        </Link>
        <div className="flex-1 ">
          <SearchBox />
        </div>
        <div className="items-center hidden md:inline-flex space-x-2 ">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        <button className="bg-blue-500 text-[12px] sm:text-sm text-white px-4 py-1 sm:px-6 md:ml-2 sm:py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all">
          Sign In
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
};

export default SearchHeader;
