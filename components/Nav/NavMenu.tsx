"use client";

import React, { useState } from "react";
import { Modal } from "../Modal";
import { User } from "@prisma/client";
import { SafeUser } from "@/types";
import { signOut } from "next-auth/react";

type PageProps = { currentUser: SafeUser | null };

const NavMenu = ({ currentUser }: PageProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<string | undefined>();

  return (
    <>
      <div className="absolute flex justify-center items-center right-1 top-12 w-48 transition rounded-2xl bg-white shadow-md hover:shadow-lg">
        <ul className="w-full ">
          {!currentUser && (
            <>
              <li
                className=" p-2 cursor-pointer hover:bg-slate-100 transition w-full "
                onClick={() => {
                  setIsOpen(true);
                  setModalType("register");
                }}
              >
                Sign Up
              </li>
              <li
                className="p-2 cursor-pointer hover:bg-slate-100 transition w-full "
                onClick={() => {
                  setIsOpen(true);
                  setModalType("login");
                }}
              >
                Login
              </li>
            </>
          )}

          {currentUser && (
            <>
              <li className="p-2 cursor-pointer hover:bg-slate-100 transition w-full   font-bold">
                Trips
              </li>
              <li className="p-2 cursor-pointer hover:bg-slate-100 transition w-full   font-bold">
                Wishlists
              </li>
              <hr />
              <li className="p-2 cursor-pointer hover:bg-slate-100 transition w-full  ">
                Manage Listings
              </li>
              <li className="p-2 cursor-pointer hover:bg-slate-100 transition w-full  ">
                Account
              </li>
              <hr />
              <li
                className="cursor-pointer hover:bg-slate-100 transition w-full  p-2"
                onClick={() => {
                  signOut();
                }}
              >
                Logout
              </li>
            </>
          )}
        </ul>
      </div>
      {isOpen && (
        <Modal setIsOpen={setIsOpen} isOpen={isOpen} type={modalType} />
      )}
    </>
  );
};

export default NavMenu;
