import ImagesListing from "@/components/SpecificListing/ImagesListing";
import ListingIdDetails from "@/components/SpecificListing/ListingIdDetails";
import getListingById from "@/utils/actions/getListingById";

import React from "react";
import { Toaster } from "react-hot-toast";
import { BiError } from "react-icons/bi";

type ParamsPage = {
  listingId: string;
};

const ListingId = async ({ params }: { params: ParamsPage }) => {
  const listing = await getListingById(params);

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            //@ts-ignore
            style: {
              background: "",
              color: "#22c55e",
            },
          },

          error: {
            duration: 3000,
            icon: <BiError className={"text-red-600 text-lg"} />,
            //@ts-ignore
            style: {
              background: "#fff",
              color: "#ef4444",
            },
          },
        }}
      />
      <h2 className="font-bold text-4fggxl pt-16">{listing?.title}</h2>
      <ImagesListing images={listing!.imageSrc} />
      <ListingIdDetails listing={listing!} />
    </>
  );
};

export default ListingId;


