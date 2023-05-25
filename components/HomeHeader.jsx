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
        <TbGridDots className="bg-transparent hover:gray-200 rounded-full text-4xl p-[2px] " />
        <button className="bg-blue-500 text-white px-6 py-2 font-mediu rounded-md hover:brightness-105 hover:shadow-md transition-shadow ">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
