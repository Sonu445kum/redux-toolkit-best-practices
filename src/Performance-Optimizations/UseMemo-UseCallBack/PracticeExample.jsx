import React, { useCallback, useMemo, useState } from 'react'


// here  i m create the child components 
const ChildButton =React.memo(({onClick})=>{
    console.log("Child components are render:");
    return <button onClick={onClick}>Increment</button>
});
export default function PracticeExample() {
    // here i m create the useState for storing the inital Value of Counter
    const [count,setCount] =useState(0);
    // here i m storing the array value which i have show on the ui
    const [number] =useState([1,2,3,4,5,6]);

    // here i m create handleIncrement functions
    const handleIncrement=useCallback(()=>{
        setCount((prev)=>prev+1);
    },[]);

    // here i m create the useMemo for the prevent the Expensive Calcultaions
    const evenNumber =useMemo(()=>{
        console.log("Filtering the Numbers:")
        return number.filter((n)=>n%2===0)
    },[number])
  return (
    <div>
        <h1>PracticeExample</h1>
        <h4>Count Value:{count}</h4>
        <h4>ChildButton</h4>
        <ChildButton onClick={handleIncrement}/>
        <h4>EvenNumbers</h4>
        <ul>
            {evenNumber.map((n)=>(
                <li key={n}>
                    {n}
                </li>
            ))}
        </ul>
    </div>
  )
}
