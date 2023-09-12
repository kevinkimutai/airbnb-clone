"use client";

import { categoryIcons } from "@/constants/constants";
import React, { use, useState } from "react";
import RentCategoryInput from "../Inputs/RentCategoryInput";
import RentMapInput from "../Inputs/RentMapInput";
import RentInfoInput from "../Inputs/RentInfoInput";
import { RentStateType, SearchStateType } from "@/types";
import RentImageUpload from "../Inputs/RentImageUpload";
import RentDescriptionInput from "../Inputs/RentDescriptionInput";
import RentPriceInput from "../Inputs/RentPriceInput";
import SearchMapInput from "../Inputs/SearchMapInput";
import SearchInfoInput from "../Inputs/SearchInfoInput";
import SearchDateCalendar from "../CalenderDate/SearchDateCalendar";
import SearchPriceInput from "../Inputs/SearchPriceInput";

enum STEPS {
  LOCATION = 0,
  INFO = 1,
  DATES = 2,
  PRICE = 3,
}

const defaultFormValues = {
  location: null,
  info: {
    guests: 1,
    rooms: 1,
    bathrooms: 1,
  },
  dates: { startDate: new Date(Date.now()), endDate: null },
  price: null,
};

const SearchModal = () => {
  const [formState, setFormState] =
    useState<SearchStateType>(defaultFormValues);
  const [step, setStep] = useState<STEPS>(STEPS.LOCATION);

  const onNext = () => {
    setStep((prevState) => prevState + 1);
  };
  const onPrevious = () => {
    setStep((prevState) => prevState - 1);
  };

  if (step === STEPS.LOCATION) {
    return (
      <SearchMapInput
        formState={formState}
        setFormState={setFormState}
        onNext={onNext}
        onBack={onPrevious}
      />
    );
  }

  if (step === STEPS.INFO) {
    return (
      <SearchInfoInput
        formState={formState}
        setFormState={setFormState}
        onNext={onNext}
        onBack={onPrevious}
      />
    );
  }

  if (step === STEPS.DATES) {
    return (
      <SearchDateCalendar
        formState={formState}
        setFormState={setFormState}
        onNext={onNext}
        onBack={onPrevious}
      />
    );
  }

  if (step === STEPS.PRICE) {
    return (
      <SearchPriceInput
        formState={formState}
        setFormState={setFormState}
        onNext={onNext}
        onBack={onPrevious}
      />
    );
  }
};

export default SearchModal;
