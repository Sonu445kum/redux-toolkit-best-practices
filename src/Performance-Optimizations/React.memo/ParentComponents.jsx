import React, { useState } from "react";
import ChildCompo from "./ChildCompo";

const ParentCompo = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/*  Name prop fix hai, Child aur GrandChild unnecessary re-render se bachenge */}
      <ChildCompo name="Sonu" />

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default ParentCompo;
