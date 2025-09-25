import React from "react";

//  GrandChild memoized, tabhi re-render hoga jab 'name' prop change ho
const GrandChildCompo = React.memo(({ name }) => {
  console.log("GrandChild rendered!");
  return <h3>GrandChild says hello {name}</h3>;
});

export default GrandChildCompo;
