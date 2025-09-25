import Counter from "./components/Counter"
import NewUsersList from "./components/NewUsersList"
import UserLists from "./components/UserLists"
import PostsList from "./Normalizations/PostsList"
import ExpensiveCalculation from "./Performance-Optimizations/UseCallback/ExpensiveCalculations"




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
      <ExpensiveCalculation/>
    </>
  )
}

export default App
