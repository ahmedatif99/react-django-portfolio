import { createSlice } from "@reduxjs/toolkit";

import { getIntro } from "../utils";

const introSlice = createSlice({
  name: "intro",
  initialState: { intro: [], isLoading: false, error: null },
  extraReducers: {
    // get Intro
    [getIntro.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getIntro.fulfilled]: (state, action) => {
      state.intro = action.payload;
      state.isLoading = false;
    },
    [getIntro.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default introSlice.reducer;
