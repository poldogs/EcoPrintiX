import prisma from "../../../../utils/connect";
import { NextResponse } from 'next/server'

export const DELETE = async (req) => {
    const postId = req.query.postId;
  
      try {
        const post = await prisma.post.delete({
          where: { id: postId },
        });
        return new NextResponse().json(JSON.stringify(post));
      } catch (error) {
        return new NextResponse(500).json(JSON.stringify({ error: `Post with ID ${postId} not found` }));
      }

}