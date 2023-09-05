import React from "react";
import Image from "next/image";
import { Listing } from "@prisma/client";

type PageProps = {
  data: Listing;
};

const ListingCard = ({ data }: PageProps) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <Image
        src={data.imageSrc[0]}
        alt={data.title}
        width={250}
        height={250}
        className="w-full rounded-lg  object-contain overflow-hidden"
      />
      <div className="p-2">
        <h2 className="font-semibold">{data.title}</h2>
        <p className="text-slate-600 text-md mb-2">{data.locationValue}</p>
        <p className="text-md">
          <span className="font-bold mr-1">$</span>
          <span className="font-semibold text-slate-600">
            {data.price}/night
          </span>
        </p>
      </div>
    </div>
  );
};

export default ListingCard;
