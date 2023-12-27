import { NextResponse } from 'next/server';
import prisma from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";


export const PUT = async (req, { params }) => {
  const { taskId } = params;

  const session = await getAuthSession(req);
  const userId = session.user.id;


  try {
    const body = await req.json();
    const userTask = await prisma.userTask.update({
      where: { taskId: taskId, userId: userId },
      data: { completed: 'true' },
    });

    return new NextResponse(JSON.stringify(userTask, { status: 200 }));
    
  } catch (err) {
    console.error('Error processing PUT request:', err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};