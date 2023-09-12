import { Listing, User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};

export type RentStateType = {
  category: string;
  location: string | null;
  info: {
    guests: number;
    rooms: number;
    bathrooms: number;
  };
  images: string[];
  description: { title: string; description: string };
  price: number | null;
};

export type SearchStateType = {
  location: string | null;
  info: {
    guests: number;
    rooms: number;
    bathrooms: number;
  };
  dates: { startDate: Date; endDate: Date | null };
  price: number | null;
};
