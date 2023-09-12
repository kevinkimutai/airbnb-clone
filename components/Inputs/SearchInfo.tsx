"use client";

import { RentStateType, SearchStateType } from "@/types";
import React, { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

type PageProps = {
  type: string;
  formState: SearchStateType;
  setFormState: React.Dispatch<React.SetStateAction<SearchStateType>>;
};

const SearchInfo = ({ type, formState, setFormState }: PageProps) => {
  const subtractState = () => {
    //@ts-ignore
    if (formState.info[`${type}`] === 1) {
      return;
    } else {
      setFormState((prev) => ({
        ...prev,
        info: {
          ...prev.info,
          //@ts-ignore
          [type.toLowerCase()]: prev.info[type.toLowerCase()] - 1,
        },
      }));
    }
  };

  const addState = () => {
    setFormState((prev) => ({
      ...prev,
      info: {
        ...prev.info,
        //@ts-ignore
        [type.toLowerCase()]: prev.info[type.toLowerCase()] + 1,
      },
    }));
  };

  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h2 className="font-semibold">{type}</h2>
        <p className="text-slate-600 text-sm">{`How Many ${type} ${
          type === "Guests" ? "Do You Allow" : "Do You Have?"
        }`}</p>
      </div>
      <div className="flex justify-center items-center">
        <AiOutlineMinusCircle
          className="mr-3 text-xl cursor-pointer"
          onClick={subtractState}
        />

        <span className="text-xl">
          {/*@ts-ignore*/}
          {formState.info[`${type.toLowerCase()}`]}
        </span>
        <AiOutlinePlusCircle
          className="ml-3 text-xl cursor-pointer"
          onClick={addState}
        />
      </div>
    </div>
  );
};

export default SearchInfo;
