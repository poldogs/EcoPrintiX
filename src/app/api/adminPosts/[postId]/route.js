import prisma from "../../../../utils/connect";
import { NextResponse } from 'next/server'

export default async function handle(req, res) {
    const postId = req.query.postId;
  
    if (req.method === 'DELETE') {
      try {
        const post = await prisma.post.delete({
          where: { id: postId },
        });
        return new NextResponse().json(JSON.stringify(post));
      } catch (error) {
        return new NextResponse(500).json(JSON.stringify({ error: `Post with ID ${postId} not found` }));
      }
    } else {
      return new NextResponse(405).text(`Method ${req.method} Not Allowed`);
    }
}