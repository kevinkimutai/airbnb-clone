import { IListingsParams, getListing } from "@/utils/actions/getListing";
import React from "react";
import ListingCard from "./ListingCard";
import PaginationBtns from "../PaginationBtn/PaginationBtns";

type Props = { params: IListingsParams };

const Listing = async ({ params }: Props) => {
  const listings: any = await getListing(params);

  if (listings.length === 0) {
    //<EmptyListing />;
    return (
      <div className="w-2/3 sm:w-1/2 md:w-1/3 p-4 rounded-lg border border-black text-center mx-auto mt-16">
        <p className="mb-12 font-bold">
          No listings Found,try with different search
        </p>
        <button className="px-8 py-2 bg-black text-white rounded-lg">
          Clear Search
        </button>
      </div>
    );
  }

  return (
    <>
      <section
        className="pt-10
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              2xl:grid-cols-6
              gap-8
              mb-6
              "
      >
        {listings.map((list: any) => (
          <ListingCard key={list.id} data={list} />
        ))}
      </section>
      <PaginationBtns />
    </>
  );
};

export default Listing;
