"use client";

import { useSearchParams, useRouter } from "next/navigation";
import React from "react";
import qs from "query-string";

const PaginationBtns = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const pageParams = searchParams?.get("page") || 1;

  let currentQuery = {};

  if (searchParams) {
    currentQuery = qs.parse(searchParams.toString());
  }

  const pageHandler = (type: string) => {
    let pageNums;

    if (type === "next") {
      pageNums = +pageParams + 1;
    }

    if (type === "back") {
      pageNums = +pageParams - 1;
    }

    const updatedQuery = {
      ...currentQuery,
      page: pageNums,
    };

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="flex items-center justify-center gap-8">
      {!pageParams || +pageParams !== 1 ? (
        <button
          className="py-2 px-16 border border-black text-center rounded-lg"
          onClick={() => {
            pageHandler("back");
          }}
        >
          Back
        </button>
      ) : null}

      <button
        className="py-2 px-16 bg-black text-center text-white rounded-lg"
        onClick={() => {
          pageHandler("next");
        }}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationBtns;
