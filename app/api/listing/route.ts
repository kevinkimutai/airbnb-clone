import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma.client";

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, password } = body;


  const user = await prisma.user.create({
    data: 
  });

  return NextResponse.json(user);
}
