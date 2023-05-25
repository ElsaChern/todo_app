import { useState } from "react";
import style from "./TodoForm.module.css";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const onSubmitHendler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <div className={style.formWrapper}>
      <form onSubmit={onSubmitHendler}>
        <input
          type="text"
          placeholder="Enter todo here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
