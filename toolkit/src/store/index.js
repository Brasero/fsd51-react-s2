import {configureStore} from "@reduxjs/toolkit";
import messageSlice from "./slice/messageSlice.js";
import countSlice from "./slice/countSlice.js";
import taskSlice from "./slice/taskSlice.js";

const store = configureStore({
  reducer: {
    message: messageSlice,
    count: countSlice,
    tasks: taskSlice
  }
})

export default store