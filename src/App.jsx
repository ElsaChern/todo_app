import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodosActions from "./components/Todos/TodosActions";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodosHendler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodosHendle = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHendler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo },
      ),
    );
  };

  const resetAllTodosHandler = () => {
    setTodos([]);
  };

  const resetCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodos = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <p className="Title">Todo App</p>
      <TodoForm addTodo={addTodosHendler} />
      {!!todos.length && (
        <TodosActions
          completedTodosExist={!!completedTodos}
          resetAll={resetAllTodosHandler}
          resetCompleted={resetCompletedTodosHandler}
        />
      )}

      <TodoList
        todos={todos}
        deleteTodo={deleteTodosHendle}
        toggleTodo={toggleTodoHendler}
      />
      {completedTodos > 0 && (
        <p className="BottomText">{`You have completed ${completedTodos} ${completedTodos > 1 ? "todos" : "todo"
          }`}</p>
      )}
    </div>
  );
};

export default App;
