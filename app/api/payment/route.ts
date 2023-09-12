import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";
import getListingById from "@/utils/actions/getListingById";
import getCurrentUser from "@/utils/actions/getCurrentUser";

export async function POST(request: Request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2023-08-16",
  });

  const data = await request.json();
  let { totalPrice, listingId } = data;

  const listing = await getListingById({ listingId });
  const currentUser = await getCurrentUser();

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: listing!.title, // Use item.gift instead of gift
            description: listing?.description,
            images: [listing!.imageSrc[0]], // Wrap the image in an array
          },
          unit_amount: totalPrice * 100,
        },
        quantity: 1,
      },
    ],
    //@ts-ignore
    customer_email: currentUser!.email,
    client_reference_id: currentUser!.id,
    payment_method_types: ["card"],
    mode: "payment",
    success_url: "http://localhost:3000?success",
    cancel_url: "http://localhost:3000?cancel",
  });

  return NextResponse.json(session.url);
}
