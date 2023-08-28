import React from "react";
import { HostContainer, Logo, Search } from ".";
import { User } from "@prisma/client";
import { SafeUser } from "@/types";

type PageProps = { currentUser: SafeUser | null };

const Navbar = ({ currentUser }: PageProps) => {
  return (
    <nav className="py-4 bg-white z-10 flex justify-between items-center border-b-[1px] ">
      <Logo />
      <Search />
      <HostContainer currentUser={currentUser} />
    </nav>
  );
};

export default Navbar;
