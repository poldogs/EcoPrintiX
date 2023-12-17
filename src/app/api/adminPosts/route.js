import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany({});

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }), { status: 500 }
    );
  }
};

export const DELETE = async (req) => {
  const postId = await req.json();

    try {
      const post = await prisma.post.delete({
        where: { id: postId },
      });
      return new NextResponse().json(JSON.stringify(post));
    } catch (error) {
      return new NextResponse(500).json(JSON.stringify({ error: `Post with ID ${postId} not found` }));
    }

}