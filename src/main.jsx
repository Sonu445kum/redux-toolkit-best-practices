// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import store from "./features/store";
// import App from "./App";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import store from './store'
// import { Provider } from 'react-redux'

// // As of React 18
// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )


// Performance Optimizations
// Add the provider in the main.jsx file 
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import './index.css'
// import App from './App.jsx'

// Redux imports
//Provider:
// React app ko Redux store se connect karta hai.
// Iske bina React components store ko access nahi kar paate.
// import { Provider } from 'react-redux'
// import { store } from './store.js'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <Provider store={store}> */}
//       <App />
//     {/* </Provider> */}
//   </StrictMode>
// )


// React-Lazy And Suspense
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

