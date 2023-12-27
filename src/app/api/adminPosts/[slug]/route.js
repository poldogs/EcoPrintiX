import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
    const { slug } = params;
  
    try {

      await prisma.comment.deleteMany({
        where: { postSlug: slug },
      });

      const post = await prisma.post.delete({
        where: { slug },
      });
  
      return new NextResponse(JSON.stringify(post, { status: 200 }));
      
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
      );
    }
  };
