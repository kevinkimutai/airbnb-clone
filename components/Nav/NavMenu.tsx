"use client";

import React, { useState } from "react";
import { Modal } from "../Modal";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<string | undefined>();

  return (
    <>
      <div className="absolute flex justify-center items-center right-1 top-12 w-40 transition p-4 rounded-2xl bg-white shadow-md hover:shadow-lg">
        <ul>
          <li
            className="mb-2 cursor-pointer "
            onClick={() => {
              setIsOpen(true);
              setModalType("register");
            }}
          >
            Sign Up
          </li>
          <li
            className="cursor-pointer "
            onClick={() => {
              setIsOpen(true);
              setModalType("login");
            }}
          >
            Login
          </li>
        </ul>
      </div>
      {isOpen && (
        <Modal setIsOpen={setIsOpen} isOpen={isOpen} type={modalType} />
      )}
    </>
  );
};

export default NavMenu;
