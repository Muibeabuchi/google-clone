"use client";

import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const PaginationButtons = () => {
  const path = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  //   convert startindex to number
  const startIndex = +searchParams.get("start") || 1;
  return (
    <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {startIndex > 10 && (
        <Link
          href={`${path}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
        >
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <BsChevronLeft className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link
          href={`${path}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
        >
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <BsChevronRight className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default PaginationButtons;
