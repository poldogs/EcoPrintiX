import { NextResponse } from 'next/server';
import prisma from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";

//http://localhost:3000/api/userTasks/1

export const GET = async (req, { params }) => {
    const { id } = params;
    try {
      console.log(id)
      const userTask = await prisma.userTask.findUnique({
        where: { id },
      });
  
      if (!userTask) {
        return new NextResponse(JSON.stringify({ error: 'Not found' }), { status: 404 });
      }
  
      return new NextResponse(JSON.stringify(userTask), { status: 200 });
      
    } catch (err) {
      console.error('Error processing GET request:', err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
      );
    }
  
  };

export const PATCH = async (req, { params }) => {
  
  try {
    const { id } = params;
    const { completed } = await req.json();

    const userTask = await prisma.userTask.update({
      where: { id },
      data: {
        completed: {
          set: completed,
        },
      },
    });

    if (!userTask) {
      return new NextResponse(JSON.stringify({ error: 'Not found' }), { status: 404 });
    }

    return new NextResponse(JSON.stringify(userTask), { status: 200 });
    
  } catch (err) {
    console.error('Error processing PATCH request:', err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }

};