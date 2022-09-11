import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
  name: "inputs",
  initialState: {
    name:null,
    age:null,
    location:null,
  },
  reducers: {
    addInput: (state, action) => {
      state.name = action.payload;
      state.age = action.payload;
      state.location = action.payload;
      return state;
    },
  },
});
export const { addInput } = inputSlice.actions;

export default inputSlice.reducer;
