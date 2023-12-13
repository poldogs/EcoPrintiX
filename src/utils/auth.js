import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import prisma from "./connect";
import { getServerSession } from "next-auth";

async function assignTasksToUser(userId) {
  const allTasks = await prisma.task.findMany();
  for (const task of allTasks) {
    await prisma.userTask.create({
      data: {
        userId: userId,
        taskId: task.id,
      },
    });
  }
}

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  ],
  events: {
    signIn: async (message) => {
      if (message.isNewUser) {
        await assignTasksToUser(message.user.id);
      }
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
