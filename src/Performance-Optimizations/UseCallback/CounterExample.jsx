import React, { useState, useCallback } from "react";

const Button = React.memo(({ onClick }) => {
  console.log("Button Rendered!");
  return <button onClick={onClick}>Increment</button>;
});

const CounterExample = () => {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(false);

  //  useCallback ensures function reference doesn't change
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button onClick={increment} />
      <button onClick={() => setOther(!other)}>Toggle Other</button>
      <p>Other state: {other.toString()}</p>
    </div>
  );
};

export default CounterExample;
