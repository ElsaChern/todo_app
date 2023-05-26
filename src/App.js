import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodosHendler = (text) => {
    const newTodo = {
      text,
      isComplited: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodosHendle = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <p className="Title">Todo App</p>
      <TodoForm addTodo={addTodosHendler} />
      <TodoList todos={todos} deleteTodo={deleteTodosHendle} />
    </div>
  );
};

export default App;
