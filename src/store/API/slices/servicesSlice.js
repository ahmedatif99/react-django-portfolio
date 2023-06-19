import { createSlice } from "@reduxjs/toolkit";

import { getServices } from "../utils";

const servicesSlice = createSlice({
  name: "services",
  initialState: { services: [], isLoading: false, error: null },
  extraReducers: {
    // get Services
    [getServices.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getServices.fulfilled]: (state, action) => {
      state.services = action.payload;
      state.isLoading = false;
    },
    [getServices.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default servicesSlice.reducer;
