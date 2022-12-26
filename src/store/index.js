import { configureStore } from "@reduxjs/toolkit";
import { themeReducer, changeTheme } from "./slices/theme-slice";
import { changeValue, valuesReducer } from "./slices/values-slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    values: valuesReducer,
  },
});

export { changeTheme, changeValue };
