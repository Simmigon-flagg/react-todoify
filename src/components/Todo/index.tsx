import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { Todo } from "../../model";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const editInput = useRef<HTMLInputElement>(null);

  const handleDone = (id: string) => {
    setTodos(
      todos.map((singleItem) =>
        singleItem.id === id
          ? { ...singleItem, isDone: !todo.isDone }
          : singleItem
      )
    );
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleEdit = (event: React.FormEvent<HTMLFormElement>, id: string) => {
    event.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  useEffect(() => {

    editInput.current?.focus();
  }, [edit]);

  return (
    <form onSubmit={(event) => handleEdit(event, todo.id)}>
      <div>
        {edit ? (
          <input
            onChange={(event) => setEditTodo(event.target.value)}
            value={editTodo}
          />
        ) : todo.isDone ? (
          <s>{todo.todo}</s>
        ) : (
          <span>{todo.todo}</span>
        )}

        <span>
          <ModeEditIcon
            className="icons"
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
          />
        </span>
        <span>
          <DeleteIcon className="icons" onClick={() => handleDelete(todo.id)} />
        </span>
        <span>
          <DoneIcon className="icons" onClick={(id) => handleDone(todo.id)} />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
