import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./features/CounterSlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})

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
// import { configureStore } from "@reduxjs/toolkit";
// import postsReducer from "./Normalizations/postsSlice";

//  const store = configureStore({
//   reducer: {
//     socialApp: postsReducer,
//   },
// });
// // export the store by the defualt
// export default store;

// here i m Create new Store to understands how the works middleware in the React Devs Tools
// import { configureStore } from "@reduxjs/toolkit";
// import { newUsersApi } from "./ReactDevTools/newUsersApi";

// const store = configureStore({
//   reducer: {
//     [newUsersApi.reducerPath]: newUsersApi.reducer, // <- usersApi reducer add kiya
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(newUsersApi.middleware), // <- usersApi middleware add kiya
//    devTools: true, // ye by default true hota hai, lekin tum manually bhi set kar sakte ho
// });

// export default store;

