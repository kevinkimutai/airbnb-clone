import { getListing } from "@/utils/actions/getListing";
import React from "react";
import ListingCard from "./ListingCard";
import Image from "next/image";

const Listing = async () => {
  const listings: any = await getListing();

  if (listings.length === 0) {
    //<EmptyListing />;
    return <div>No listings Found,try with different search</div>;
  }

  return (
    <section
      className="pt-10
              grid
              grid-cols-1]
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              2xl:grid-cols-6
              gap-8"
    >
      {listings.map((list: any) => (
        <ListingCard key={list.id} data={list} />
      ))}
    </section>
  );
};

export default Listing;
