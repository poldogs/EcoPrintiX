import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET ALL COMMENTS OF A POST
export const GET = async () => {

    try {
      const comments = await prisma.comment.findMany({});
      return new NextResponse(JSON.stringify(comments), { status: 200 });
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }), { status: 500 }
      );
    }
};
