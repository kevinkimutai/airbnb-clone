import prisma from "../../lib/prisma.client";

export const getReservations = async () => {
  return await prisma.reservation.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
