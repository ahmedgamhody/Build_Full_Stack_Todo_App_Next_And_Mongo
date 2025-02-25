import AddTodoModal from "@/components/AddTodoModal";

export default function Home() {
  return (
    <main className="container mx-auto px-4 flex min-h-screen flex-col items-center justify-between">
      <AddTodoModal />
    </main>
  );
}
