import Image from "next/image";
import React from "react";

import { BiMenu } from "react-icons/bi";

import Avatar from "../../public/placeholder.jpg";

const HostContainer = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="mr-8 hover:bg-slate-300 transition py-2 px-4 rounded-full">
        Host Your Home
      </div>
      <div className="flex justify-center items-center p-1 rounded-full border border-slate-300">
        <BiMenu className="text-xl mr-4" />
        <div className="rounded-full">
          <Image
            src={Avatar}
            alt="user"
            className="w-[2rem] h-[2rem] object-contain rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HostContainer;
