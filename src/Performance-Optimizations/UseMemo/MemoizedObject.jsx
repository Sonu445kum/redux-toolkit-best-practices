// components/MemoizedObject.jsx
import React, { useState, useMemo } from "react";

const MemoizedObject = () => {
    // Create two useState hooks for storing the  value of intialState
  const [dark, setDark] = useState(false);
  const [count, setCount] = useState(0);
// here i create a functions for changing the themes if i m click on the Toggle Buttons
  const theme = useMemo(() => {
    return {
        // here i m set the styling for the themes
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
      padding: "10px"
    };
  }, [dark]);

  return (
    <div>
      <h2>Memoized Object Example</h2>
      {/* Here i m Create Two Buttons one for the incremant  the value And Other is Change the Themes */}
      <button onClick={() => setCount((c) => c + 1)}>Increment: {count}</button>
      <button onClick={() => setDark((prev) => !prev)}>Toggle Theme</button>
      <div style={theme}>Theme applied with useMemo </div>
    </div>
  );
};

export default MemoizedObject;
