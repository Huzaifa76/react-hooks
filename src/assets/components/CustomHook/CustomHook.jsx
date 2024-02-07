import React, { useState } from 'react'
import useCustomHook from './useCustomHook';

const CustomHook = () => {
    const [count,setCount]=useState(0);
    useCustomHook(count);
  return (
    <div>
        <h4>{count}</h4>
        <button className='btn btn-primary' onClick={()=>{setCount(count + 1)}}>Click Me</button>
    </div>
  )
}

export default CustomHook
