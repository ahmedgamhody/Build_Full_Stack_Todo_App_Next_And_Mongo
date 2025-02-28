import { getUserTodoListAction } from "@/actions/todo.actions";
import AddTodoModal from "@/components/AddTodoModal";
import TodosTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();
  const todos = await getUserTodoListAction({ user_id: userId });

  return (
    <main className="container mx-auto px-4 flex min-h-screen flex-col items-center gap-4">
      <AddTodoModal userId={userId} />
      <TodosTable todos={todos} />
    </main>
  );
}
