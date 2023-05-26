import { RiTodoFill } from "react-icons/ri";
import style from "./Todo.module.css";

const Todo = ({ todo, deleteTodo }) => {
  return (
    <div className={style.todo} onDoubleClick={() => deleteTodo(todo.id)}>
      <RiTodoFill className={style.todoIcon} />
      <p className={style.text}>{todo.text}</p>
    </div>
  );
};

export default Todo;
