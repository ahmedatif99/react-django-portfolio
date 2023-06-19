import { createSlice } from "@reduxjs/toolkit";

import { getLanguages } from "../utils";

const languagesSlice = createSlice({
  name: "languages",
  initialState: { languages: [], isLoading: false, error: null },
  extraReducers: {
    // get Languages
    [getLanguages.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getLanguages.fulfilled]: (state, action) => {
      state.languages = action.payload;
      state.isLoading = false;
    },
    [getLanguages.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default languagesSlice.reducer;
