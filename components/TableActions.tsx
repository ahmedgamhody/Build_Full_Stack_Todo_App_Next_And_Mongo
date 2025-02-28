"use client";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import Spinner from "./Spinner";
import { useState } from "react";
import { deleteTodoAction } from "@/actions/todo.actions";
import UpdateForm from "./UpdateForm";
import { Todo } from "@prisma/client";
interface ITableActionsProps {
  todo: Todo;
}
export default function TableActions({ todo }: ITableActionsProps) {
  const [loading, setLoading] = useState(false);

  async function handleDelete(id: string) {
    setLoading(true);
    await deleteTodoAction(id);
    setLoading(false);
  }
  return (
    <>
      <UpdateForm todo={todo} />
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={() => handleDelete(todo.id)}
      >
        {loading ? <Spinner /> : <Trash />}
      </Button>
    </>
  );
}
