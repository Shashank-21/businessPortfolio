import { createSlice } from "@reduxjs/toolkit";

const selectedServiceSlice = createSlice({
  name: "selected-service",
  initialState: { serviceName: "", categoryName: "" },
  reducers: {
    //Assumption - action.payload = {categoryName,serviceName}
    changeSelectedService(state, action) {
      state.categoryName = action.payload.categoryName;
      state.serviceName = action.payload.serviceName;
    },
  },
});

export const { changeSelectedService } = selectedServiceSlice.actions;
export const selectedServiceReducer = selectedServiceSlice.reducer;
