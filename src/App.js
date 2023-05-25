import { useState } from "react";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodosHendler = (text) => {
    setTodos([...todos, text]);
  };

  return (
    <div className="App">
      <h2>Todo App</h2>
      <TodoForm addTodo={addTodosHendler} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
