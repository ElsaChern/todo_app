import style from "./Todo.module.css";

const Todo = ({ todo }) => {
  return (
    <div className={style.todo}>
      <p className={style.text}>{todo}</p>
    </div>
  );
};

export default Todo;
