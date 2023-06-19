import { createSlice } from "@reduxjs/toolkit";

import { getSocial } from "../utils";

const socialSlice = createSlice({
  name: "social",
  initialState: { social: [], isLoading: false, error: null },
  extraReducers: {
    // get Social
    [getSocial.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getSocial.fulfilled]: (state, action) => {
      state.social = action.payload;
      state.isLoading = false;
    },
    [getSocial.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default socialSlice.reducer;
