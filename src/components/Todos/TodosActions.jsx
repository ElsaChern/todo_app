import Button from "../UI/Button";
import { RiRefreshLine, RiDeleteBin2Line } from "react-icons/ri";
// import style from "./TodosActions.module.css";

const TodosActions = ({ resetAll, resetCompleted, completedTodosExist }) => {
  return (
    <>
      <Button title="Reset all" onClick={resetAll}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Delete completed items"
        onClick={resetCompleted}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </>
  );
};

export default TodosActions;
