import React from "react";

import { SearchStateType } from "@/types";
import SearchInfo from "./SearchInfo";

type PageProps = {
  formState: SearchStateType;
  setFormState: React.Dispatch<React.SetStateAction<SearchStateType>>;
  onNext: () => void;
  onBack: () => void;
};

const SearchInfoInput = ({
  formState,
  setFormState,
  onBack,
  onNext,
}: PageProps) => {
  return (
    <>
      <h2 className="mb-6 font-semibold">
        Some Basics On The Type Of House Your Looking For.
      </h2>
      <SearchInfo
        type="Guests"
        formState={formState}
        setFormState={setFormState}
      />
      <SearchInfo
        type="Rooms"
        formState={formState}
        setFormState={setFormState}
      />
      <SearchInfo
        type="Bathrooms"
        formState={formState}
        setFormState={setFormState}
      />
      <div className="flex justify-center items-center gap-2">
        <button
          className="border border-black text-black text-center bg-white w-full py-2 rounded-md"
          onClick={() => onBack()}
        >
          Back
        </button>
        <button
          className="border border-rose-500 bg-rose-600 text-white text-center w-full py-2 rounded-md outline-none"
          onClick={() => onNext()}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default SearchInfoInput;
