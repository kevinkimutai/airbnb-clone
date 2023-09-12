import { SafeListing, SafeUser } from "@/types";
import React from "react";

import Avatar from "../../public/placeholder.jpg";
import Image from "next/image";
import { categoryIcons } from "@/constants/constants";
import { MdOutlineBathtub, MdOutlineBedroomParent } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import MapBox from "../Map/MapBox";
import CalenderDate from "../CalenderDate/CalenderDate";
import { getReservations } from "@/utils/actions/getReservations";

type PageProps = {
  listing: SafeListing & {
    user: SafeUser;
  };
};

const IconComponent = ({ Icon }: any) => <Icon className="mr-12 text-lg" />;

const ListingIdDetails = async ({ listing }: PageProps) => {
  let matchedCategory = categoryIcons.find(
    (cat: any) => cat.label === listing.category
  );

  const reservations = await getReservations();

  return (
    <div className="flex flex-col justify-start items-start md:flex-row mt-20">
      <div className="w-full md:w-2/3 pr-8">
        <div className="flex justify-between items-center py-4 border-b">
          <h2 className="font-bold mb-2 text-2xl">
            Hosted By {listing.user.name}
          </h2>
          {listing.user.image ? (
            <Image
              src={listing.user.image}
              alt="user"
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : (
            <Image
              src={Avatar}
              alt="user"
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
        </div>
        <div className="py-4 border-b">
          <div className="flex justify-start items-center mb-4">
            <IconComponent Icon={matchedCategory.icon} />
            <p className="font-semibold text-slate-600 text-md">
              {matchedCategory.label}
            </p>
          </div>
          <div className="flex justify-start items-center mb-4">
            <BsPeople className="text-lg mr-12 " />
            <p className="font-semibold  text-slate-600 text-md">
              {listing.guestCount} Guests
            </p>
          </div>
          <div className="flex justify-start items-center mb-4">
            <MdOutlineBedroomParent className="text-lg mr-12 " />
            <p className="font-semibold  text-slate-600 text-md">
              {listing.roomCount} Rooms
            </p>
          </div>
          <div className="flex justify-start items-center mb-4">
            <MdOutlineBathtub className="text-lg mr-12 " />
            <p className="font-semibold  text-slate-600 text-md">
              {listing.roomCount} Bathrooms
            </p>
          </div>
        </div>
        <p className="py-4 text-slate-600 border-b">{listing.description}</p>
        <div className="py-4">
          <MapBox center={listing.locationValue} />
        </div>
      </div>

      <div className="p-4 w-full md:w-1/3 shadow-xl rounded-lg border border-slate-400">
        <CalenderDate
          listingId={listing.id}
          price={listing.price}
          reservations={reservations}
        />
      </div>
    </div>
  );
};

export default ListingIdDetails;
