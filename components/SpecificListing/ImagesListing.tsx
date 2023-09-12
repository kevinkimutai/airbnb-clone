"use client";

import Image from "next/image";
import React, { useState } from "react";

type PageProps = {
  images: string[];
};

const ImagesListing = ({ images }: PageProps) => {
  const [imgIndx, setImgIndx] = useState(0);
  return (
    <section className="grid grid-cols-4 grid-rows-3 md:grid-rows-2 gap-2 sm:gap-4 py-4">
      <div className="col-span-4 row-span-2 md:col-span-2 rounded-lg overflow-hidden">
        <Image
          src={images[imgIndx]}
          width={250}
          height={250}
          alt={"airbnb"}
          className="w-full h-full object-fill"
        />
      </div>
      <div className="row-start-3 md:col-start-3 md:row-start-1 rounded-lg overflow-hidden">
        {" "}
        <Image
          src={images[0]}
          width={250}
          height={250}
          alt={"airbnb"}
          className="w-full h-full object-fill"
          onClick={() => {
            setImgIndx(0);
          }}
        />
      </div>
      <div className="row-start-3 md:col-start-4 md:row-start-1 rounded-lg overflow-hidden">
        {" "}
        <Image
          src={images[1]}
          width={250}
          height={250}
          alt={"airbnb"}
          className="w-full h-full object-fill"
          onClick={() => {
            setImgIndx(1);
          }}
        />
      </div>
      <div className="row-start-3 md:col-start-3 rounded-lg overflow-hidden md:row-start-2">
        {" "}
        <Image
          src={images[2]}
          width={250}
          height={250}
          alt={"airbnb"}
          className="w-full h-full object-fill"
          onClick={() => {
            setImgIndx(2);
          }}
        />
      </div>
      <div className="row-start-3 md:col-start-4 rounded-lg flex justify-center items-center md:row-start-2">
        <p className="font-semibold">Cycle Through The Images.</p>
      </div>
    </section>
  );
};

export default ImagesListing;
