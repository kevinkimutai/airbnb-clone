import ImagesListing from "@/components/SpecificListing/ImagesListing";
import ListingIdDetails from "@/components/SpecificListing/ListingIdDetails";
import ToastContainer from "@/components/ToastContainer/ToastContainer";
import getListingById from "@/utils/actions/getListingById";

import React from "react";

type ParamsPage = {
  listingId: string;
};

const ListingId = async ({ params }: { params: ParamsPage }) => {
  const listing = await getListingById(params);

  return (
    <>
      <ToastContainer />
      <h2 className="font-bold text-4fggxl pt-16">{listing?.title}</h2>
      <ImagesListing images={listing!.imageSrc} />
      <ListingIdDetails listing={listing!} />
    </>
  );
};

export default ListingId;
