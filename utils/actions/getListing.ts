import prisma from "../../lib/prisma.client";

export interface IListingsParams {
  page?: number;
  userId?: string;
  guestsCount?: number;
  roomsCount?: number;
  bathroomsCount?: number;
  startDate?: string;
  endDate?: string;
  location?: string;
  category?: string;
}

export async function getListing(params: IListingsParams) {
  try {
    const {
      page,
      userId,
      roomsCount,
      guestsCount,
      bathroomsCount,
      location,
      startDate,
      endDate,
      category,
    } = params;

    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    if (category) {
      query.category = category;
    }

    if (roomsCount) {
      query.roomCount = {
        gte: +roomsCount,
      };
    }

    if (guestsCount) {
      query.guestCount = {
        gte: +guestsCount,
      };
    }

    if (bathroomsCount) {
      query.bathroomCount = {
        gte: +bathroomsCount,
      };
    }

    if (location) {
      query.locationValue = location;
    }

    if (startDate && endDate) {
      query.NOT = {
        reservations: {
          some: {
            OR: [
              {
                endDate: { gte: startDate },
                startDate: { lte: startDate },
              },
              {
                startDate: { lte: endDate },
                endDate: { gte: endDate },
              },
            ],
          },
        },
      };
    }

    const listings = await prisma.listing.findMany({
      where: query,
      take: 20,
      skip: page ? page * 20 : 0,
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));

    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}
