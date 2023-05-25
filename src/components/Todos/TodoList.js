import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <div>
      {!todos.length && <h4>List is empty</h4>}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
