"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();

export const getUserTodoListAction = async ({
  user_id,
}: {
  user_id: string | null;
}) => {
  const todos = await prisma.todo.findMany({
    where: {
      user_id: user_id as string,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return todos;
};

export const createTodoAction = async ({
  title,
  body,
  completed,
  user_id,
}: {
  title: string;
  body?: string | undefined;
  completed: boolean;
  user_id?: string | null;
}) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      completed,
      user_id: user_id as string,
    },
  });
  revalidatePath("/");
};

export const deleteTodoAction = async (id: string) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
};
export interface UpdateTodo {
  id: string;
  title: string;
  body: string;
  completed: boolean;
}
export const updateTodoAction = async (todo: UpdateTodo) => {
  await prisma.todo.update({
    where: { id: todo.id },
    data: {
      title: todo.title,
      body: todo.body,
      completed: todo.completed,
    },
  });
  revalidatePath("/");
};
