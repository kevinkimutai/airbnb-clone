"use client";

import React, { useState } from "react";
import { SearchStateType } from "@/types";

import { ClipLoader } from "react-spinners";
import { useSearchParams, useRouter } from "next/navigation";
import qs from "query-string";
import toast from "react-hot-toast";

type PageProps = {
  formState: SearchStateType;
  setFormState: React.Dispatch<React.SetStateAction<SearchStateType>>;
  onNext: () => void;
  onBack: () => void;
};

const SearchPriceInput = ({
  formState,
  setFormState,
  onBack,
  onNext,
}: PageProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();

  function removeNullValues(obj: any) {
    for (const key in obj) {
      if (obj[key] === null) {
        delete obj[key];
      }
    }
    return obj;
  }

  let newFormQuery = {
    location: formState.location,
    guestsCount: formState.info.guests,
    roomsCount: formState.info.rooms,
    bathroomsCount: formState.info.bathrooms,
    // startDate: new Date(formState.dates.startDate).toISOString(),
    // endDate: new Date(formState.dates.endDate!).toISOString(),
    price: formState.price,
  };

  const submitListing = () => {
    console.log("clicked");
    console.log("before load", isLoading);
    setIsLoading(true);

    let currentQuery = {};

    if (searchParams) {
      currentQuery = qs.parse(searchParams.toString());
    }

    console.log(newFormQuery);
    const queryForm = removeNullValues(newFormQuery);

    console.log(queryForm);

    const updatedQuery = {
      ...currentQuery,
      //@ts-ignore
      ...queryForm,
    };

    console.log("UPDTAED QUERY", updatedQuery);

    const url = qs.stringifyUrl(
      {
        url: "/", // Replace with your desired URL
        //@ts-ignore
        query: updatedQuery,
      },
      { skipNull: true }
    );

    console.log("URL", url);

    router.push(url);
    setIsLoading(false);
  };

  return (
    <>
      <h2 className="mb-6 font-semibold">Finally, Whats Your Budget!</h2>
      <input
        className="p-1 border w-full border-slate-600 focus:border-black transition mb-4 rounded-md"
        placeholder="Price /day"
        type="number"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setFormState((prev) => ({
            ...prev,
            price: +e.target.value,
          }));
        }}
      />
      {isLoading ? (
        <div className="flex justify-center items-center mt-5">
          <ClipLoader color="#f43f5e" size={20} />
        </div>
      ) : (
        <div className="flex justify-center items-center mt-5 w-full gap-2">
          <button
            className="border border-black text-black text-center bg-white w-full py-2 rounded-md"
            onClick={() => onBack()}
          >
            Back
          </button>
          <button
            className="border border-rose-500 bg-rose-600 text-white text-center w-full py-2 rounded-md outline-none"
            onClick={submitListing}
          >
            Submit
          </button>
        </div>
      )}
    </>
  );
};

export default SearchPriceInput;
