import { createSlice } from "@reduxjs/toolkit";

import { getAbout } from "../utils";

const aboutSlice = createSlice({
  name: "about",
  initialState: { about: [], isLoading: false, error: null },
  extraReducers: {
    // get About
    [getAbout.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getAbout.fulfilled]: (state, action) => {
      state.about = action.payload;
      state.isLoading = false;
    },
    [getAbout.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default aboutSlice.reducer;
