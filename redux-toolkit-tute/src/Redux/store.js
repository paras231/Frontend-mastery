import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import postReducer from "./postSlice";
import  cartReducer  from "./cartSlice";
const store = configureStore({
  reducer: {
    todos: todoReducer,
    posts: postReducer,
    cart: cartReducer,
  },
});

export default store;
