import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "currency",
  initialState: "INR",
  reducers: {
    changeCurrency(state, action) {
      return action.payload;
    },
  },
});

export const { changeCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
