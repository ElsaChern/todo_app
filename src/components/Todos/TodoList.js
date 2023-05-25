import Todo from "./Todo";
import style from "./TodoList.module.css";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className={style.todoList}>
      {!todos.length && <p className={style.emptyText}>List is empty ☹</p>}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} deleteTodo={deleteTodo} index={index} />
      ))}
    </div>
  );
};

export default TodoList;
