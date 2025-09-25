import React, { useState, useCallback } from "react";

// 1️ Child component
// React.memo se wrap kiya hai taaki List sirf re-render ho jab props change ho
const List = React.memo(({ items, onSelect }) => {
  console.log("List Rendered!"); // Console me dikhega jab List render hoti hai
  return (
    <ul>
      {items.map((item, i) => (
        // 2️ onClick event me parent se pass kiya function call ho raha hai
        <li key={i} onClick={() => onSelect(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
});

const ListExample = () => {
  // 3️ State variables
  const [selected, setSelected] = useState(null); // selected fruit
  const [refresh, setRefresh] = useState(false); // dummy state to test re-render

  // 4️ Static array of items
  const fruits = ["Apple", "Banana", "Mango", "Orange"];

  // 5️ useCallback hook
  // handleSelect function ki reference stable rahegi
  // dependency [] matlab ye function kabhi nahi badlega
  const handleSelect = useCallback((item) => {
    setSelected(item); // selected state update karega
  }, []);

  return (
    <div>
      {/* 6️ Display selected item */}
      <h2>Selected: {selected}</h2>

      {/* 7️ Pass items array and callback function as props */}
      <List items={fruits} onSelect={handleSelect} />
      {/* React.memo + useCallback ensures List component unnecessary re-render nahi hota */}

      {/* 8️ Button to toggle dummy state */}
      <button onClick={() => setRefresh(!refresh)}>Refresh</button>
      {/* Clicking this will re-render parent, lekin List component re-render nahi hoga 
          kyunki handleSelect ki reference same hai */}
    </div>
  );
};

export default ListExample;
