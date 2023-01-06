import { configureStore } from "@reduxjs/toolkit";
import { serviceCategoriesApi } from "./apis/category-api";
import { changeValue, valuesReducer } from "./slices/values-slice";
import { currencyReducer, changeCurrency } from "./slices/currency-slice";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  selectedServiceReducer,
  changeSelectedService,
} from "./slices/selected-service-slice";

export const store = configureStore({
  reducer: {
    values: valuesReducer,
    selectedService: selectedServiceReducer,
    currency: currencyReducer,
    [serviceCategoriesApi.reducerPath]: serviceCategoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(serviceCategoriesApi.middleware);
  },
});

setupListeners(store.dispatch);

export { changeValue, changeCurrency, changeSelectedService };

export {
  useFetchServiceCategoriesQuery,
  useUpdateTestimonialsMutation,
  useAddServiceRequestMutation,
} from "./apis/category-api";
