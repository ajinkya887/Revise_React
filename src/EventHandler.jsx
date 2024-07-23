import React from 'react'

export default function EventHandler() {
    const handleclick=()=>{
        console.log("Button is clicked")
    }
  return (
    <div>
        <button onClick={handleclick}> Click Me</button>
    </div>
  )
}
