import Counter from "./components/Counter"
import NewUsersList from "./components/NewUsersList"
import UserLists from "./components/UserLists"
import PostsList from "./Normalizations/PostsList"
import Header from "./Performance-Optimizations/React-Lazy-Suspense/Header"
import ExpensiveExample from "./Performance-Optimizations/UseCallback/CounterExample"
import CounterExample from "./Performance-Optimizations/UseCallback/CounterExample"
import ListExample from "./Performance-Optimizations/UseCallback/ListExamples"
import ExpensiveCalculation from "./Performance-Optimizations/UseMemo/ExpensiveCalculations"
import FilteredList from "./Performance-Optimizations/UseMemo/FilteringList"
import MemoizedObject from "./Performance-Optimizations/UseMemo/MemoizedObject"
import React, { Suspense } from "react"

// import the Lazy Components here
const LazyComponent = React.lazy(() => import("./Performance-Optimizations/React-Lazy-Suspense/LazyComponents"));

function App() {
 

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
       <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <LazyComponent />
      </Suspense>
    </>
  )
}

export default App
