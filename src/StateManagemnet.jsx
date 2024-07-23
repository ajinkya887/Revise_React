import React, {useState} from "react";



export default function Counter() {
    const [count, setCount] = useState(0);
    const increament = () =>{
        setCount (count + 1)
    }
  return (
    <>
        <p>Current Count = {count}</p>
        <button onClick={increament}> increament</button>
    </>
  )
}
