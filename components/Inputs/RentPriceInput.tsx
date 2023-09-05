"use client";

import React, { useState } from "react";
import { RentStateType } from "@/types";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";

type PageProps = {
  formState: RentStateType;
  setFormState: React.Dispatch<React.SetStateAction<RentStateType>>;
  onNext: () => void;
  onBack: () => void;
};

const RentPriceInput = ({
  formState,
  setFormState,
  onBack,
  onNext,
}: PageProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>();

  const submitListing = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/listing", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        toast.success("successfully added listing!");
        router.refresh();
        setLoading(false);
      }
    } catch (err) {
      toast.error("something went wrong when adding listing!");
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="mb-6 font-semibold">Finally, Your Price Rate!</h2>
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
      {loading ? (
        <div className="flex justify-center items-center mt-5">
          <ClipLoader color="#f43f5e" size={20} />
        </div>
      ) : (
        <div className="flex justify-center items-center mt-5 w-full gap-2">
          <button
            className="border-2 border-black text-black text-center bg-white w-full py-2 rounded-md"
            onClick={() => onBack()}
          >
            Back
          </button>
          <button
            className="bg-rose-600 text-white text-center w-full py-2 rounded-md outline-none"
            onClick={() => {
              if (formState.price === 0) {
                return;
              }
              submitListing();
            }}
          >
            Submit
          </button>
        </div>
      )}
    </>
  );
};

export default RentPriceInput;
