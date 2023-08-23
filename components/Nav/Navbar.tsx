import React from "react";
import { HostContainer, Logo, Search } from ".";

const Navbar = () => {
  return (
    <nav className="py-4 bg-white z-10 flex justify-between items-center border-b-[1px] ">
      <Logo />
      <Search />
      <HostContainer />
    </nav>
  );
};

export default Navbar;
