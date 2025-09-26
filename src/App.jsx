import ParentCompo from "../../../useStatePractice/src/Components/PropDrilling/ParentCompo"
import About from "../../../useStatePractice/src/Components/React-Router/About"
import Home from "../../../useStatePractice/src/Components/React-Router/Home"
import Counter from "./components/Counter"
import NewUsersList from "./components/NewUsersList"
import UserLists from "./components/UserLists"
import PostsList from "./Normalizations/PostsList"
import Header from "./Performance-Optimizations/React-Lazy-Suspense/Header"
import ParentComponenets from "./Performance-Optimizations/React.memo/ParentComponents"
import ExpensiveExample from "./Performance-Optimizations/UseCallback/CounterExample"
import CounterExample from "./Performance-Optimizations/UseCallback/CounterExample"
import ListExample from "./Performance-Optimizations/UseCallback/ListExamples"
import PracticeExample from "./Performance-Optimizations/UseMemo-UseCallBack/PracticeExample"
import ExpensiveCalculation from "./Performance-Optimizations/UseMemo/ExpensiveCalculations"
import FilteredList from "./Performance-Optimizations/UseMemo/FilteringList"
import MemoizedObject from "./Performance-Optimizations/UseMemo/MemoizedObject"
import React, { Suspense, useState } from "react"

// import the Lazy Components here
const LazyComponent = React.lazy(() => import("./Performance-Optimizations/React-Lazy-Suspense/LazyComponents"));

function App() {
  // create her useState for storing the initial Value
  const [page, setPage] = useState("home");

  return (
    <>
      <h1>RTK Query Best Practices</h1>
      {/* <UserLists/> */}
      {/* <Counter/> */}
      {/*  */}
      {/* <UserLists/> */}

      {/* Normailizations */}
      {/* <PostsList/> */}

      {/* React Devs Tools Understands and Check how perform in the browser */}
      {/* <NewUsersList/> */}

      {/* Performance Optimizations */}

      {/* 3 Examples Of useMemo Hooks */}
      {/* <ExpensiveCalculation/> */}
      {/* <FilteredList/> */}
      {/* <MemoizedObject/> */}

      {/* 3 Examples Of useCallBack Hooks */}
      {/* <CounterExample/> */}
      {/* <ExpensiveExample/> */}
      {/* <ListExample/> */}

      {/* React.Lazy And Suspense */}
       {/* <Header />
       {/*  Suspense is required around lazy component */}
      {/* <Suspense fallback={<p>Loading...</p>}> */}
      {/* Jab tak Componenets load Hoo rha hh ui Ko Loading Dikhega */}
       {/* LazyComponent tab load hoga jab ye render hoga */}
        {/* <LazyComponent /> */}
      {/* </Suspense> * */}
      

       {/* <div>
      <h1>Conditional Lazy Loading</h1>

      {/* Buttons to switch page */}
      {/* <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("about")}>About</button> */}

      {/* Suspense wrapper for lazy components */}
      {/* <Suspense fallback={<p>Loading page...</p>}>
        {page === "home" && <Home />}
        {page === "about" && <About />}
      </Suspense>  */}
    {/* </div> */}

    {/* React.memo */}
    {/* <ParentComponenets/> */}

    {/* UseMemo And UseCallBack */}
    <PracticeExample/>
    </>
  )
}

export default App;
