import { RiTodoFill } from "react-icons/ri";
import style from "./Todo.module.css";

const Todo = ({ todo, deleteTodo, index }) => {
  return (
    <div className={style.todo} onDoubleClick={() => deleteTodo(index)}>
      <RiTodoFill className={style.todoIcon} />
      <p className={style.text}>{todo}</p>
    </div>
  );
};

export default Todo;
