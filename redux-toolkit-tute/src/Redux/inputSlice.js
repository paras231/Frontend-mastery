import { createSlice } from "@reduxjs/toolkit";


export const inputSlice = createSlice({
  name: "inputs",
  initialState:{},
  reducers: {
    addInput: (state, action) => {
      state.username = action.payload;
      state.email = action.payload;
      state.password = action.payload;
    },
  },
});
export const  {addInput}  = inputSlice.actions;

export default inputSlice.reducer;
