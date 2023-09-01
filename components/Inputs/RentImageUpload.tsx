import React from "react";
import ImageUpload from "./ImageUpload";
import { RentStateType } from "@/types";

type PageProps = {
  formState: RentStateType;
  setFormState: React.Dispatch<React.SetStateAction<RentStateType>>;
  onNext: () => void;
  onBack: () => void;
};

const RentImageUpload = ({
  onBack,
  onNext,
  formState,
  setFormState,
}: PageProps) => {
  return (
    <>
      <h2 className="mb-6 font-semibold">Some Images of your Place?</h2>
      <div className="flex flex-col justify-center items-center max-h-[50vh] overflow-y-auto">
        <ImageUpload main={true} setFormState={setFormState} />
        <div className="flex justify-center items-center gap-2">
          <ImageUpload setFormState={setFormState} />
          <ImageUpload setFormState={setFormState} />
        </div>
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
              if (!formState.images) {
                return;
              }
              onNext();
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default RentImageUpload;
