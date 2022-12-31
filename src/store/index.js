import { configureStore } from "@reduxjs/toolkit";
import { themeReducer, changeTheme } from "./slices/theme-slice";
import { changeValue, valuesReducer } from "./slices/values-slice";
import {
  changeService,
  serviceCategoriesReducer,
} from "./slices/service-categories-slice";
import { currencyReducer, changeCurrency } from "./slices/currency-slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    values: valuesReducer,
    serviceCategories: serviceCategoriesReducer,
    currency: currencyReducer,
  },
});

export { changeTheme, changeValue, changeService, changeCurrency };
