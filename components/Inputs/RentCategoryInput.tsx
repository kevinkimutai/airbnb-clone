"use client";

import { categoryIcons } from "@/constants/constants";
import { RentStateType } from "@/types";
import React from "react";

type PageProps = {
  formState: RentStateType;
  setFormState: React.Dispatch<React.SetStateAction<RentStateType>>;
  onNext: () => void;
};

const IconComponent = ({ Icon }: any) => <Icon />;

const RentCategoryInput = ({ formState, setFormState, onNext }: PageProps) => {
  return (
    <>
      <h2 className="mb-2">Which of These Best Describes Your House?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto ">
        {/*@ts-ignore*/}
        {categoryIcons.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className={`${
              formState.category === label
                ? "border-2 border-black font-semibold"
                : "border border-slate-500"
            } w-full rounded-md p-2  transition`}
            onClick={() =>
              setFormState((prevState: any) => ({
                ...prevState,
                category: label,
              }))
            }
          >
            <IconComponent Icon={Icon} />
            <p>{label}</p>
          </div>
        ))}
      </div>
      <button
        className="bg-rose-600 text-white text-center mt-5 w-full py-2 rounded-md outline-none"
        onClick={() => {
          onNext();
        }}
      >
        Next
      </button>
    </>
  );
};

export default RentCategoryInput;
