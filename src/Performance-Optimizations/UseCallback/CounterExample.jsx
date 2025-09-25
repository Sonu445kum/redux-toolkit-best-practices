import React, { useState, useCallback } from "react";

// 1️ Child component
// React.memo se wrap kiya, matlab child sirf re-render hoga agar props change ho
const ExpensiveChild = React.memo(({ calculate }) => {
  console.log("ExpensiveChild Rendered!"); // Dekhne ke liye kab render ho raha hai
  return <p>Result: {calculate(5)}</p>; // calculate function ko call kar ke result display karenge
});

// 2️ Parent component
const ExpensiveExample = () => {
  const [count, setCount] = useState(0); // main state
  const [other, setOther] = useState(false); // sirf extra state dikhane ke liye

  // 3️ useCallback hook
  // isse calculateSquare ki reference stable rahegi
  // dependency [count] matlab jab count change hoga tabhi naya function banega
  const calculateSquare = useCallback(
    (num) => {
      console.log("Calculating..."); // console me dikhega ki function call ho raha hai
      return num * num + count; // yaha main logic hai
    },
    [count]
  );

  return (
    <div>
      <h2>Count: {count}</h2>

      {/* 4️ Pass function as prop to child */}
      <ExpensiveChild calculate={calculateSquare} />

      {/* Buttons to update state */}
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setOther(!other)}>Toggle Other State</button>
      <p>Other state: {other.toString()}</p>
    </div>
  );
};

export default ExpensiveExample;
