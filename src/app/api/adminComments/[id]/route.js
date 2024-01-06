import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
    const { id } = params;
  
    try {
      const comment = await prisma.comment.delete({
        where: { id },
      });
  
      return new NextResponse(JSON.stringify(comment, { status: 200 }));
      
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
      );
    }
  };
