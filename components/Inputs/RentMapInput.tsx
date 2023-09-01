"use client";

import React, { useState, Fragment } from "react";

import { Combobox, Transition } from "@headlessui/react";
import countries from "world-countries";
import MapBox from "../Map/MapBox";
import { RentStateType } from "@/types";

type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

const formattedCountries = countries.map((country: any) => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  latlng: country.latlng,
  region: country.region,
}));

type PageProps = {
  formState: RentStateType;
  setFormState: React.Dispatch<React.SetStateAction<RentStateType>>;
  setLocationDetails: (country: string) => void;
  onNext: () => void;
  onBack: () => void;
};

const RentMapInput = ({
  formState,
  setFormState,
  setLocationDetails,
  onNext,
  onBack,
}: PageProps) => {
  const [selectedCountry, setSelectedCountry] = useState<CountrySelectValue>();
  const [query, setQuery] = useState("");

  const filteredCountries =
    query === ""
      ? formattedCountries
      : formattedCountries.filter((country) => {
          return country.label.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <>
      <Combobox value={selectedCountry} onChange={setSelectedCountry}>
        <div className=" flex items-center justify-start relative w-full mb-8">
          {/* Button for the combobox. Click on the icon to see the complete dropdown */}
          {/* <Combobox.Button className="">
          <p>country</p>
        </Combobox.Button> */}

          {/* Input field for searching */}
          <Combobox.Input
            className="w-full rounded-md bg-transparent focus:bg-slate-100 focus:ring-blue-300 px-2 py-1 border border-slate-600 transition"
            displayValue={(country: any) => country.label}
            onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes
            placeholder="Country Location..."
            value={selectedCountry?.label}
          />

          {/* Transition for displaying the options */}
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")} // Reset the search query after the transition completes
          >
            <Combobox.Options
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              static
            >
              {filteredCountries.length === 0 && query !== "" ? (
                <p>No such country</p>
              ) : (
                filteredCountries.map((country) => (
                  <Combobox.Option
                    key={country.label}
                    className={({ active }) =>
                      `relative p-2 ${
                        active ? "bg-rose-500 text-white" : "text-gray-900"
                      }`
                    }
                    value={country.label}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {country.label}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-black" : "bg-rose-500 w-full"
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      <MapBox center={selectedCountry?.latlng} />
      <div className="flex justify-center items-center gap-2 mt-5">
        <button
          className="border-2 border-black text-black text-center bg-white w-full py-2 rounded-md"
          onClick={() => onBack()}
        >
          Back
        </button>
        <button
          className="bg-rose-600 text-white text-center w-full py-2 rounded-md outline-none"
          onClick={() => {
            if (!selectedCountry) {
              return;
            } else {
              setLocationDetails(selectedCountry.label);
              onNext();
            }
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default RentMapInput;
