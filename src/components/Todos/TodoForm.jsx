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
        <input className={style.formInput}
          type="text"
          placeholder="Enter todo here"
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={30}
        />
        <Button type="submit" title="Add todo" disabled={!text}>
          Add
        </Button>
        {text.length > 29 ? <p>maximum string length reached</p> : ""}
      </form>
    </div>
  );
};

export default TodoForm;
