import Image from "next/image";
import React from "react";

import Img from "../../public/logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="h-8 w-fit">
      <Link href={"/"}>
        <Image
          src={Img}
          alt="Airbnb Clone"
          className="h-full w-full object-contain"
        />
      </Link>
    </div>
  );
};

export default Logo;
