import React from "react";
import GrandChildCompo from "./GrandChildCompo";

//  Child bhi memoized, sirf re-render hoga jab 'name' prop change ho
const ChildCompo = React.memo(({ name }) => {
  console.log("Child rendered!");
  return (
    <div>
      <h2>Child Component</h2>
      <GrandChildCompo name={name} />
    </div>
  );
});

export default ChildCompo;
