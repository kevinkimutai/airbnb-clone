import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma.client";

import getCurrentUser from "@/utils/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  const body = await request.json();

  const { listingId, startDate, endDate, totalPrice } = body;

  if (!listingId || !startDate || !endDate || !totalPrice || !currentUser) {
    return;
  }

  const listingAndReservation = await prisma.listing.update({
    where: {
      id: listingId,
    },
    data: {
      reservations: {
        create: {
          userId: currentUser.id,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          totalPrice,
        },
      },
    },
  });

  return NextResponse.json(listingAndReservation);
}
