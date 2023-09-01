"use client";

import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { IoIosClose } from "react-icons/io";

import { RegisterModal, RentModal } from ".";
import { headerModalDetails } from "@/constants/constants";
import LoginModal from "./LoginModal";

type PageProps = {
  setIsOpen: (bool: boolean) => void;
  isOpen: boolean;
  type?: string;
};

const Modal = ({ setIsOpen, isOpen, type }: PageProps) => {
  let header;

  if (type === "register") {
    header = headerModalDetails.register;
  }

  if (type === "login") {
    header = headerModalDetails.login;
  }
  if (type === "airbnb_my_house") {
    header = headerModalDetails.airbnb_my_house;
  }
  return (
    // Use the `Transition` component at the root level
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={() => setIsOpen(false)}>
        {/*
          Use one Transition.Child to apply one transition to the backdrop...
        */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        {/*
          ...and another Transition.Child to apply a separate transition
          to the contents.
        */}
        <div className="flex justify-center items-center fixed inset-0 overflow-y-auto">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel
              className={"mx-auto bg-white rounded-2xl w-[40vw] p-4 shadow-sm "}
            >
              <div className="relative flex justify-center items-center border-b-[1px] w-full py-2 mb-4">
                <Dialog.Title className="font-semibold">
                  {header?.title}
                </Dialog.Title>

                <IoIosClose
                  className="absolute top-1 right-1 text-3xl text-red-600 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              </div>
              <h2 className="font-semibold">{header?.salutation.header}</h2>
              <p className="text-slate-500 mb-4">
                {header?.salutation.paragraph}
              </p>

              {type === "register" && <RegisterModal />}
              {type === "login" && <LoginModal />}
              {type === "airbnb_my_house" && <RentModal />}

              {/* ... */}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
