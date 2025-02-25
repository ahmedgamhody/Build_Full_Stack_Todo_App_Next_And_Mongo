import { z } from "zod";

// Define Todo Schema
export const todoSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters long")
    .max(20, "Title must not exceed 20 characters"),
  body: z
    .string()
    .min(5, "Body must be at least 5 characters long")
    .max(100, "Body must not exceed 100 characters")
    .optional(),
  completed: z.boolean().default(false),
  createdAt: z.date().default(new Date()),
});

// Generate TypeScript type from schema
export type TodoSchemaType = z.infer<typeof todoSchema>;

// Default values for the form
export const defaultTodoValues: TodoSchemaType = {
  title: "",
  body: "",
  completed: false,
  createdAt: new Date(),
};
