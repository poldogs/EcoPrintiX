import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/utils/auth";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const session = await getAuthSession(req);
    if (session && session.user) {
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
      // Si no hay sesión o el usuario de la sesión, devolver un error 401
      res.status(401).json({ error: 'Not authenticated' });
    }
  } else {
    // Si el método de la solicitud no es GET, devolver un error 405
    res.status(405).json({ error: 'Method not allowed' });
  }
}