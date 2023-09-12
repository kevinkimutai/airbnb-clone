"use client";

import { categoryIcons } from "@/constants/constants";
import React from "react";
import { useSearchParams, useRouter } from "next/navigation";

import qs from "query-string";

const IconComponent = ({ Icon, selected }: any) => (
  <Icon
    className={`${
      selected ? "text-black" : "text-slate-800"
    } text-2xl mb-2 transition" `}
  />
);

const Categories = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedCategory = searchParams?.get("category");

  let currentQuery = {};

  if (searchParams) {
    currentQuery = qs.parse(searchParams.toString());
  }

  const queryHandler = (label: string) => {
    const updatedQuery = {
      ...currentQuery,
      category: label,
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
    <div className="py-4 overflow-x-scroll no-scrollbar flex justify-start gap-6 ">
      {/*@ts-ignore */}
      {categoryIcons.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="flex flex-col justify-center items-center cursor-pointer"
          onClick={() => {
            queryHandler(label);
          }}
        >
          <IconComponent Icon={Icon} selected={label === selectedCategory} />
          <p
            className={`${
              label === selectedCategory
                ? "text-black border-b-2 border-b-black"
                : "text-slate-800"
            } text-sm whitespace-nowrap pb-2 capitalize transition-all`}
          >
            {label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
