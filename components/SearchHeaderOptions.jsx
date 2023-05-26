"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCamera } from "react-icons/bs";

export default function SearchHeaderOptions() {
  const pathname = usePathname();
  const path = pathname.split("/")[2];
  const searchParams = useSearchParams();
  const params = searchParams.get("searchTerm");
  const router = useRouter();
  function selectTab(tab) {
    router.push(`/search/${tab}?searchTerm=${params}`);
  }
  console.log(pathname, path, params);
  return (
    <div className="flex items-center select-none   space-x-3 ml-[10%] text-gray-700 text-sm">
      <div
        className={`${
          path === "web" && "!border-blue-400"
        } flex items-center  space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-2 px-2 `}
        onClick={() => selectTab("web")}
      >
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>
      <div
        className={`${
          path === "image" && "!border-blue-400"
        } flex items-center  space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-2 px-2 `}
        onClick={() => selectTab("image")}
      >
        <BsCamera className="text-md" />
        <p>Images</p>
      </div>
    </div>
  );
}
