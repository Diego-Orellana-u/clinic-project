import { configureStore } from "@reduxjs/toolkit";
import darkReducer from "../features/darkSlice";

const darkStore = configureStore({
  reducer: {
    dark: darkReducer,
  },
});

export default darkStore;
