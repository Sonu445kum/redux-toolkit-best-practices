// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from "../features/CounterSlice"

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// })

// import { configureStore } from "@reduxjs/toolkit";
// import { usersApi } from "../features/usersApi";

// const store = configureStore({
//   reducer: {
//     [usersApi.reducerPath]: usersApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(usersApi.middleware),
// });

// export default store;

// Normailizations
// store.js
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../Normalizations/postsSlice";

 const store = configureStore({
  reducer: {
    socialApp: postsReducer,
  },
});
// export the store by the defualt
export default store;
