import { createSlice } from "@reduxjs/toolkit";

import { getContact } from "../utils";

const contactSlice = createSlice({
  name: "contact",
  initialState: { contact: [], isLoading: false, error: null },
  extraReducers: {
    // get Contact
    [getContact.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getContact.fulfilled]: (state, action) => {
      state.contact = action.payload;
      state.isLoading = false;
    },
    [getContact.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default contactSlice.reducer;
