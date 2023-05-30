import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import style from "./Todo.module.css";

const Todo = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div
      className={`${style.todo} ${todo.isCompleted ? style.completedTodo : ""}`}
    >
      <RiTodoFill className={style.noteIcon} />
      <p className={style.text}>{todo.text}</p>
      <RiDeleteBin2Line
        className={style.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck
        className={style.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  );
};

export default Todo;
