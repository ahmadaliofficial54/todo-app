import { configureStore } from "@reduxjs/toolkit";
import toDoSlice from "./todoSlice";
const store = configureStore({
  reducer: {
    toDoStore: toDoSlice,
  },
});
export default store;
