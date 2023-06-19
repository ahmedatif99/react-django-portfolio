import { configureStore } from "@reduxjs/toolkit";

import about from "./API/slices/aboutSlice";
import contact from "./API/slices/contactSlice";
import intro from "./API/slices/introSlice";
import languages from "./API/slices/languagesSlice";
import projects from "./API/slices/projectsSlice";
import services from "./API/slices/servicesSlice";
import social from "./API/slices/socilaSlice";

export default configureStore({
  reducer: {
    about,
    contact,
    intro,
    languages,
    projects,
    services,
    social,
  },
});
