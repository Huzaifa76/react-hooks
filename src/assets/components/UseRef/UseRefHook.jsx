import React, { useState,useEffect,useRef } from 'react'

const UseRefHook = () => {
    const count =useRef(0);
    const [input,setInput] =useState("");
    useEffect(()=>{
        count.current =count.current +1;
    })
  return (
    <div>
        <input type="text" placeholder='Enter Text here'  value={input} onChange={(e)=>setInput(e.target.value)}/>
        <p>The text count will be here {count.current}</p>
    </div>
  )
}

export default UseRefHook
