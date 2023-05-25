import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const onSubmitHendler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={onSubmitHendler}>
      <input
        type="text"
        placeholder="Enter todo here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
