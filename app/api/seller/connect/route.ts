import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { robloxUsername, robloxUserId } = body;

    if (!robloxUsername || !robloxUserId) {
      return new NextResponse("Missing fields", { status: 400 });
    }

    const user = await prisma.user.update({
      where: {
        id: session.user.id as string,
      },
      data: {
        robloxUsername,
        robloxUserId,
        role: "SELLER",
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
