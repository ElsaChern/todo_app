import style from "./Todo.module.css";

const Todo = ({ todo, deleteTodo, index }) => {
  return (
    <div className={style.todo} onDoubleClick={() => deleteTodo(index)}>
      <p className={style.text}>{todo}</p>
    </div>
  );
};

export default Todo;
