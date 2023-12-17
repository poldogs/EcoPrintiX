import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/utils/auth";
import { getSession } from 'next-auth/react';


export const GET = async (req) => {
    const session = await getAuthSession(req);

    if (session) {
      const userId = session.user.id;
      // Usando el userId obtenido de la sesión para buscar las tareas del usuario en la base de datos
      const userTasks = await prisma.userTask.findMany({
        where: {
          userId: userId,
        },
        include: {
          task: true,
        },
      });
      // Devolviendo las tareas del usuario como respuesta
      return new NextResponse(JSON.stringify(userTasks), { status: 200 });
    } else {
      return new NextResponse(JSON.stringify({ error: 'Not authenticated' }), { status: 401 });
    }
}
