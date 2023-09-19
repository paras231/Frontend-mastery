import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  keywords: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.query = action.payload;
      state.keywords = [...state.keywords, action.payload];
    },
  },
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;