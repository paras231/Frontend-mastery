import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import postReducer from "./postSlice";
import cartReducer from "./cartSlice";
import inputReducer from "./inputSlice";
import searchReducer from "./searchSlice";
const store = configureStore({
  reducer: {
    todos: todoReducer,
    posts: postReducer,
    cart: cartReducer,
    inputs: inputReducer,
    search: searchReducer,
  },
});

export default store;
