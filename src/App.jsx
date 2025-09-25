import Counter from "./components/Counter"
import NewUsersList from "./components/NewUsersList"
import UserLists from "./components/UserLists"
import PostsList from "./Normalizations/PostsList"
import CounterExample from "./Performance-Optimizations/UseCallback/CounterExample"
import ExpensiveCalculation from "./Performance-Optimizations/UseMemo/ExpensiveCalculations"
import FilteredList from "./Performance-Optimizations/UseMemo/FilteringList"
import MemoizedObject from "./Performance-Optimizations/UseMemo/MemoizedObject"




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
      <CounterExample/>
    </>
  )
}

export default App
