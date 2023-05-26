import Todo from "./Todo";
import style from "./TodoList.module.css";

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <div className={style.todoList}>
      {!todos.length && <p className={style.emptyText}>List is empty ☹</p>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
