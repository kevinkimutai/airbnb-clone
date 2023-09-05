import prisma from "../../lib/prisma.client";

export const getListing = async () => {
  return await prisma.listing.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
