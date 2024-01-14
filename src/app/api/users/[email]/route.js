import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
    const { email } = params;
    const { id } = req.body;
  
    try {

        // Delete associated accounts
      await prisma.account.deleteMany({
        where: { userId: id },
      });

      // Delete associated sessions
      await prisma.session.deleteMany({
        where: { userId: id },
      });

      // Delete associated comments
      await prisma.comment.deleteMany({
        where: { userEmail: email },
      });

      // Delete associated posts
      await prisma.post.deleteMany({
        where: { userEmail: email },
      });

      // Delete associated userTasks
      await prisma.userTask.deleteMany({
        where: { userId: id },
      });

      const user = await prisma.user.delete({
        where: { email },
      });
  
      return new NextResponse(JSON.stringify(user, { status: 200 }));
      
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
      );
    }
  };
