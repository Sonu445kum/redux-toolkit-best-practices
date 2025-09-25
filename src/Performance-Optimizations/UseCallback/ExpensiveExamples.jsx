import React, { useState, useCallback } from "react";

// 1️ Child component
// React.memo use kiya hai taaki ye sirf tab re-render ho jab props change ho
const ExpensiveChild = React.memo(({ calculate }) => {
  console.log("ExpensiveChild Rendered!"); // Console me dikhega jab child render ho raha hai
  return <p>Result: {calculate(5)}</p>; // calculate function ko call karke result display kar rahe hain
});

const ExpensiveExample = () => {
  // 2️ State variables
  const [count, setCount] = useState(0); // count state
  // useState hook ka use kar rahe hain jo component re-render ko trigger karta hai

  // 3️ useCallback hook
  // useCallback se function ki reference stable rehti hai jab tak dependency (yaha count) change na ho
  const calculateSquare = useCallback(
    (num) => {
      console.log("Calculating..."); // Console me dikhega jab ye function execute hota hai
      return num * num + count; // main logic: num ka square + current count
    },
    [count] // dependency array: jab count change hoga tabhi naya function banega
  );

  return (
    <div>
      {/* 4️ Display current count */}
      <h2>Count: {count}</h2>

      {/* 5️ Pass function as prop to child */}
      <ExpensiveChild calculate={calculateSquare} />
      {/* React.memo + useCallback combination ensures child sirf tab re-render hoga jab calculateSquare ki reference change ho */}

      {/* 6️ Button to increase count */}
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      {/* Button click se count update hoga → parent re-render hoga → aur useCallback ke dependency me count hai → naya calculateSquare function banega → child re-render hoga */}
    </div>
  );
};

export default ExpensiveExample;
