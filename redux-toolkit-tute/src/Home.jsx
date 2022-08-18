import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  // here i will show todos todo
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  // we can also get todos from lcalstorage .
  return (
    <>
      {todos.map((todo) => {
        return <div key={todo.id}>{todo.text}</div>;
      })}
    </>
  );
};

export default Home;
