import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import postReducer from "./postSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    posts:postReducer
  },
});

export default store;
