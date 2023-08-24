"use client";

import Image from "next/image";
import React, { useState } from "react";

import { BiMenu } from "react-icons/bi";

import Avatar from "../../public/placeholder.jpg";
import { NavMenu } from ".";

const HostContainer = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <>
      <div className="relative flex justify-center items-center">
        <div className="mr-8 hover:bg-slate-300 transition py-2 px-4 rounded-full">
          Host Your Home
        </div>
        <div className="flex justify-center items-center p-1 rounded-full border border-slate-300">
          <BiMenu
            className="text-xl mr-4"
            onClick={() => {
              setNavOpen((prevState) => !prevState);
            }}
          />
          <div className="rounded-full">
            <Image
              src={Avatar}
              alt="user"
              className="w-[2rem] h-[2rem] object-contain rounded-full"
            />
          </div>
        </div>
        {navOpen && <NavMenu />}
      </div>
    </>
  );
};

export default HostContainer;
