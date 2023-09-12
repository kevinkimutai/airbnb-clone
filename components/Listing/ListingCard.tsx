import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Listing } from "@prisma/client";
import FavouriteIcon from "./Favourite";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import Link from "next/link";

type PageProps = {
  data: Listing;
};

const ListingCard = async ({ data }: PageProps) => {
  const currentUser = await getCurrentUser();

  return (
    <Link href={`/listing/${data.id}`}>
      <div className="rounded-lg overflow-hidden relative">
        <FavouriteIcon id={data.id} currentUser={currentUser} />
        <Image
          src={data.imageSrc[0]}
          alt={data.title}
          width={250}
          height={250}
          className="w-full h-[20rem] sm:h-[15rem] rounded-lg object-fill overflow-hidden"
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
    </Link>
  );
};

export default ListingCard;
