import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/utils/auth";
import { getSession } from 'next-auth/react';



export const GET = async (req) => {
    const session = await getAuthSession(req);

    if (session) {
      const userId = session.user.id;

      const userTasks = await prisma.userTask.findMany({
        where: {
          userId: userId,
        },
        include: {
          task: true,
        },
      });
      return new NextResponse(JSON.stringify(userTasks), { status: 200 });
    } else {
      return new NextResponse(JSON.stringify({ error: 'Not authenticated' }), { status: 401 });
    }
}

/* Ordenar por iconos, pendiente
export default async function handle(req, res) {
  const { icon } = req.query;

  const tasks = await prisma.task.findMany({
    where: {
      icon: icon,
    },
  });

  res.json(tasks);
}*/
