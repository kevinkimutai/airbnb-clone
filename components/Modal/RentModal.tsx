"use client";

import { categoryIcons } from "@/constants/constants";
import React, { use, useState } from "react";
import RentCategoryInput from "../Inputs/RentCategoryInput";
import RentMapInput from "../Inputs/RentMapInput";
import RentInfoInput from "../Inputs/RentInfoInput";
import { RentStateType } from "@/types";
import RentImageUpload from "../Inputs/RentImageUpload";
import RentDescriptionInput from "../Inputs/RentDescriptionInput";
import RentPriceInput from "../Inputs/RentPriceInput";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const defaultFormValues = {
  category: "",
  location: null,
  info: {
    guests: 1,
    rooms: 1,
    bathrooms: 1,
  },
  images: [],
  description: {
    title: "",
    description: "",
  },
  price: null,
};

const RentModal = () => {
  const [formState, setFormState] = useState<RentStateType>(defaultFormValues);
  const [step, setStep] = useState<STEPS>(STEPS.CATEGORY);

  const onNext = () => {
    setStep((prevState) => prevState + 1);
  };
  const onPrevious = () => {
    setStep((prevState) => prevState - 1);
  };

  if (step === STEPS.CATEGORY) {
    return (
      <RentCategoryInput
        formState={formState}
        setFormState={setFormState}
        onNext={onNext}
      />
    );
  }

  if (step === STEPS.LOCATION) {
    return (
      <RentMapInput
        formState={formState}
        setFormState={setFormState}
        onNext={onNext}
        onBack={onPrevious}
      />
    );
  }

  if (step === STEPS.INFO) {
    return (
      <RentInfoInput
        formState={formState}
        setFormState={setFormState}
        onNext={onNext}
        onBack={onPrevious}
      />
    );
  }

  if (step === STEPS.IMAGES) {
    return (
      <RentImageUpload
        formState={formState}
        setFormState={setFormState}
        onNext={onNext}
        onBack={onPrevious}
      />
    );
  }

  if (step === STEPS.DESCRIPTION) {
    return (
      <RentDescriptionInput
        formState={formState}
        setFormState={setFormState}
        onNext={onNext}
        onBack={onPrevious}
      />
    );
  }

  if (step === STEPS.PRICE) {
    return (
      <RentPriceInput
        formState={formState}
        setFormState={setFormState}
        onNext={onNext}
        onBack={onPrevious}
      />
    );
  }
};

export default RentModal;
