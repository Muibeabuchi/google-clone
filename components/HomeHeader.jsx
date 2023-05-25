import Link from "next/link";
import React from "react";
import { TbGridDots } from "react-icons/tb";

const HomeHeader = () => {
  return (
    <header className="flex justify-end p-5 text-sm ">
      <div className="flex space-x-4 items-center ">
        <Link href="" className="hover:underline">
          Gmail
        </Link>
        <Link href="" className="hover:underline">
          Images
        </Link>
        <span className="p-2 transition-all duration-200 cursor-pointer hover:bg-gray-200 rounded-full">
          <TbGridDots className="bg-transparent  rounded-full text-2xl sm:text-3xl hover:bg-gray-200 " />
        </span>
        <button className="bg-blue-500 text-white px-4 py-1 sm:px-6 sm:py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow ">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
