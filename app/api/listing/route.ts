//@ts-nocheck

import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma.client";
import getCurrentUser from "@/utils/actions/getCurrentUser";

export async function POST(request: Request) {
  const body = await request.json();

  const { category, location, info, images, description, price } = body;

  const currentUser = await getCurrentUser();

  const user = await prisma.listing.create({
    data: {
      title: description.title,
      description: description.description,
      imageSrc: images,
      category,
      roomCount: info.rooms,
      bathroomCount: info.bathrooms,
      guestCount: info.guests,
      locationValue: location,
      userId: currentUser!.id,
      price,
    },
  });

  return NextResponse.json(user);
}
