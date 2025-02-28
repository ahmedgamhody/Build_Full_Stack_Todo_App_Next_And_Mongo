import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "./ui/badge";
import TableActions from "./TableActions";

interface Todo {
  title: string;
  body: string | null;
  completed: boolean;
  createdAt: Date;
  id: string;
}

interface ITodoTableProps {
  todos: Todo[];
}

export default function TodosTable({ todos }: ITodoTableProps) {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Completed</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos?.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{todo.id}</TableCell>
            <TableCell>{todo.title.slice(0, 20)}</TableCell>
            <TableCell>
              {todo.completed ? (
                <Badge>Completed</Badge>
              ) : (
                <Badge variant="secondary">Not Completed</Badge>
              )}
            </TableCell>
            <TableCell className="flex items-center space-x-2 justify-end">
              <TableActions todo={todo} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total Todos</TableCell>
          <TableCell className="text-right">{todos.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
