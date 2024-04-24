import {configureStore} from "@reduxjs/toolkit";
import messageSlice from "./slice/messageSlice.js";
import countSlice, {increment} from "./slice/countSlice.js";
import taskSlice from "./slice/taskSlice.js";

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
    tasks: taskSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    middleware
  ])
})

export default store