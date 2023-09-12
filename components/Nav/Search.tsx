"use client";

import React, { useState } from "react";

import { BiSearch } from "react-icons/bi";
import { Modal } from "../Modal";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<string | undefined>();

  const handleSearchModal = () => {
    setIsOpen(true);
    setModalType("search");
  };

  return (
    <>
      <div
        className="border shadow-sm hover:shadow-md transition rounded-full p-2 flex justify-center items-center cursor-pointer"
        onClick={handleSearchModal}
      >
        <div className="px-4 border-r-2">
          <p className="font-semibold">Anywhere</p>
        </div>
        <div className="px-4 border-r-2 hidden sm:block">
          <p className="font-semibold">Any Week</p>
        </div>
        <div className=" flex justify-center items-center px-4">
          <p className="text-slate-600 mr-8 hidden sm:block">Add Guests</p>
          <div className="flex justify-center items-center rounded-full bg-red-500 text-white p-2">
            <BiSearch className="text-lg" />
          </div>
        </div>
      </div>
      {isOpen && (
        <Modal setIsOpen={setIsOpen} isOpen={isOpen} type={modalType} />
      )}
    </>
  );
};

export default Search;
