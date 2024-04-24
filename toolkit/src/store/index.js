import {configureStore} from "@reduxjs/toolkit";
import messageSlice from "./slice/messageSlice.js";
import countSlice, {increment} from "./slice/countSlice.js";
import taskSlice from "./slice/taskSlice.js";
import logSlice from "./slice/logSlice.js";
import logMiddleware from "./middleware/logMiddleware.js";

const middleware = (store) => (next) => (action) => {
  console.log(action)
  if (action.type !== increment.toString()) {
    store.dispatch(increment())
  }
  next(action)
}


const store = configureStore({
  reducer: {
    message: messageSlice,
    count: countSlice,
    tasks: taskSlice,
    logs: logSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    logMiddleware
  ])
})

export default store