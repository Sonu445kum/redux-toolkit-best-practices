// components/ExpensiveCalculation.jsx
import React, { useState, useMemo } from "react";

const ExpensiveCalculation = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  // Expensive calculation function
  const expensiveValue = useMemo(() => {
    console.log("Expensive calculation running...");
    for (let i = 0; i < 1000000000; i++) {} // Heavy loop
    return count * 2;
  }, [count]);

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    padding: "10px",
    marginTop: "10px"
  };

  return (
    <div>
      <h2>Expensive Calculation Example</h2>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value) || 0)}
      />
      <button onClick={() => setDark((prev) => !prev)}>Toggle Theme</button>
      <div style={themeStyle}>Calculated Value: {expensiveValue}</div>
    </div>
  );
};

export default ExpensiveCalculation;
