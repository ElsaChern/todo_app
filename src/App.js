import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

function App() {
  return (
    <div className="App">
      <h2>Todo App</h2>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
