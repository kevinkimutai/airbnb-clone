import { User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
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
