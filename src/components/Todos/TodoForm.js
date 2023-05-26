import { useState } from "react";
import style from "./TodoForm.module.css";
import Button from "../UI/Button";

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
        <Button type="submit" title="Add todo">
          Add
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
