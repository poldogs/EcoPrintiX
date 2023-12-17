import { NextResponse } from 'next/server';
import prisma from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";
import bodyParser from 'body-parser';

export const config = {
  api: {
    bodyParser: false,
  },
};

const jsonParser = bodyParser.json();

export async function PUT(req, res) {
  const taskId = req.query.taskId;

  const session = await getAuthSession(req);
  const userId = session.user.id;

  if (req.method === 'PUT') {
    jsonParser(req, res, async () => { 
      const { completed } = req.body;

      const result = await prisma.userTask.update({
        where: { taskId: taskId, userId: userId },
        data: { completed: true },
      });
      return NextResponse.json(result);
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}