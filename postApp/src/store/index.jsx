import {configureStore} from "@reduxjs/toolkit";
import postSlice from "./slice/postSlice.jsx";

const store = configureStore({
  reducer: {
    articles: postSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
  
  ])
})

export default store