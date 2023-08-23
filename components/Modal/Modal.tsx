"use client";

import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { IoIosClose } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";

const Modal = () => {
  let [isOpen, setIsOpen] = useState(true);

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
              className={"mx-auto bg-white rounded-2xl w-[30vw] p-4 shadow-sm "}
            >
              <div className="relative flex justify-center items-center border-b-[1px] w-full py-2 mb-4">
                <Dialog.Title className="font-semibold">
                  Register Account
                </Dialog.Title>

                <IoIosClose className="absolute top-1 right-1 text-3xl text-red-600" />
              </div>
              <h2 className="font-semibold">Welcome To Airbnb</h2>
              <p className="text-slate-500 mb-4">Create an Account</p>

              <div className="mb-4">
                <input
                  placeholder="Name"
                  type="text"
                  className="border border-slate-500 w-full p-2 rounded-md"
                />
              </div>
              <div className="mb-4">
                <input
                  placeholder="Email"
                  type="email"
                  className="border border-slate-500 w-full p-2 rounded-md"
                />
              </div>
              <div className="mb-8">
                <input
                  placeholder="Password"
                  type="password"
                  className="border border-slate-500 w-full p-2 rounded-md"
                />
              </div>
              <button
                type="submit"
                className="bg-rose-500 w-full rounded-md mb-3 py-2 text-white"
              >
                Sign Up
              </button>
              <div className="w-full border-t-[1px] border-slate-500 mb-3" />

              <div className="border border-slate-500 w-full rounded-md">
                <div className="flex justify-center items-center p-2 cursor-pointer">
                  <FcGoogle />
                  <span className="ml-2">Signup with Google</span>
                </div>
              </div>

              {/* ... */}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
