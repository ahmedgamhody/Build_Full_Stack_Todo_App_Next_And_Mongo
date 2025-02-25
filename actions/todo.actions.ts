"use server";
import { TodoSchemaType } from "@/validation";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getTodosListAction = async () => {
  const todos = await prisma.todo.findMany();
  return todos;
};

export const createTodoAction = async (data: TodoSchemaType) => {
  await prisma.todo.create({
    data,
  });
};

export const deleteTodoAction = async () => {};

export const updateTodoAction = async () => {};
