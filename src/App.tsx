import React, { useState } from "react";
import "./App.css";
import InputField from "./components/Input";
import TodoList from "./components/TodoList";
import { Todo } from "./model";
import { nanoid } from 'nanoid'

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const id = nanoid();

    if (todo) {
      setTodos([...todos, { id, todo, isDone: false }]);
      setTodo("");
    }
  };

  
  return (
    <div className="App">
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
