import { createSlice } from "@reduxjs/toolkit";

import { getProjects } from "../utils";

const projectsSlice = createSlice({
  name: "projects",
  initialState: { projects: [], isLoading: false, error: null },
  extraReducers: {
    // get Projects
    [getProjects.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getProjects.fulfilled]: (state, action) => {
      state.projects = action.payload;
      state.isLoading = false;
    },
    [getProjects.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default projectsSlice.reducer;
