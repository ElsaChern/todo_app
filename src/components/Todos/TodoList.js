import Todo from "./Todo";
import style from "./TodoList.module.css";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className={style.todoList}>
      {!todos.length && <p className={style.emptyText}>List is empty ☹</p>}
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
