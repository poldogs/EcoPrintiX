import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import prisma from "./connect";
import { getServerSession } from "next-auth";

async function assignTasksToNewUser(userId) {
  const tasks = await prisma.task.findMany();
  const userTasks = tasks.map(task => ({
    userId: userId,
    taskId: task.id,
    completed: false
  }));
  await prisma.userTask.createMany({ data: userTasks });
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
  callbacks: {
    afterCreate: async (user, account, profile) => {
      await assignTasksToNewUser(user.id);
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
