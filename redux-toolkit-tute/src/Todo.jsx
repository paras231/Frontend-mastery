import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./Redux/todoSlice";

const Todo = () => {
  // here i will implement add todo logic
  const dispatch = useDispatch();
  const [text, setText] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};

export default Todo;
