import React from "react";
import { RentStateType } from "@/types";

type PageProps = {
  formState: RentStateType;
  setFormState: React.Dispatch<React.SetStateAction<RentStateType>>;
  onNext: () => void;
  onBack: () => void;
};

const RentDescriptionInput = ({
  formState,
  setFormState,
  onBack,
  onNext,
}: PageProps) => {
  return (
    <>
      <h2 className="mb-6 font-semibold">Creative Description On Your House</h2>
      <div className="flex flex-col">
        <input
          className="p-1 w-full border border-slate-600 focus:border-black transition mb-4 rounded-md"
          placeholder="Title"
          type="string"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFormState((prev) => ({
              ...prev,
              description: { ...prev.description, title: e.target.value },
            }));
          }}
        />
        <textarea
          className="p-1 w-full border border-slate-600 focus:border-black transition mb-4 rounded-md"
          rows={3}
          placeholder="Description"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setFormState((prev) => ({
              ...prev,
              description: { ...prev.description, description: e.target.value },
            }));
          }}
        />
      </div>
      <div className="flex justify-center items-center mt-5 w-full gap-2">
        <button
          className="border border-black text-black text-center bg-white w-full py-2 rounded-md"
          onClick={() => onBack()}
        >
          Back
        </button>
        <button
          className="border border-rose-500 bg-rose-600 text-white text-center w-full py-2 rounded-md outline-none"
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
    </>
  );
};

export default RentDescriptionInput;
