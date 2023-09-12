import { SearchStateType } from "@/types";
import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import Datepicker from "react-tailwindcss-datepicker";

type PageProps = {
  formState: SearchStateType;
  setFormState: React.Dispatch<React.SetStateAction<SearchStateType>>;
  onNext: () => void;
  onBack: () => void;
};

const SearchDateCalendar = ({
  formState,
  setFormState,
  onNext,
  onBack,
}: PageProps) => {
  const handleValueChange = (newValue: any) => {
    setFormState((prev) => ({
      ...prev,
      dates: { startDate: newValue.startDate, endDate: newValue.endDate },
    }));
  };
  return (
    <>
      <h2 className="mb-6 font-semibold"> Your Dates For Reservation!</h2>
      <div className="rounded-lg p-4 border border-slate-400 mb-4">
        <CiCalendarDate className="mb-4 text-xl" />

        <Datepicker
          value={formState.dates}
          onChange={handleValueChange}
          startFrom={new Date(Date.now())}
          primaryColor={"rose"}
          placeholder={"Reserve Date"}
          inputClassName="w-full rounded-md border border-black focus:border-rose-500 transition p-2"
          minDate={new Date(Date.now())}
          //@ts-ignore
          //   `disabledDates={reserv?.map((r) => [
          //     { startDate: new Date(r.startDate), endDate: new Date(r.endDate) },
          //   ])}`
        />
      </div>
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

export default SearchDateCalendar;
