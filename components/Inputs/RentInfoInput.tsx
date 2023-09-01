import React from "react";
import InfoInput from "./InfoInput";
import { RentStateType } from "@/types";

type PageProps = {
  formState: RentStateType;
  setFormState: React.Dispatch<React.SetStateAction<RentStateType>>;
  onNext: () => void;
  onBack: () => void;
};

const RentInfoInput = ({
  formState,
  setFormState,
  onBack,
  onNext,
}: PageProps) => {
  return (
    <>
      <h2 className="mb-6 font-semibold">Share Some Basics of your Place?</h2>
      <InfoInput
        type="Guests"
        formState={formState}
        setFormState={setFormState}
      />
      <InfoInput
        type="Rooms"
        formState={formState}
        setFormState={setFormState}
      />
      <InfoInput
        type="Bathrooms"
        formState={formState}
        setFormState={setFormState}
      />
      <div className="flex justify-center items-center gap-2">
        <button
          className="border-2 border-black text-black text-center bg-white w-full py-2 rounded-md"
          onClick={() => onBack()}
        >
          Back
        </button>
        <button
          className="bg-rose-600 text-white text-center w-full py-2 rounded-md outline-none"
          onClick={() => onNext()}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default RentInfoInput;
