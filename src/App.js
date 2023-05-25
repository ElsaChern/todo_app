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
      <p className="Title">Todo App</p>
      <TodoForm addTodo={addTodosHendler} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
