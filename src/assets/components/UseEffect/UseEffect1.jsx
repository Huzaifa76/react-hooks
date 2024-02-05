import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {
    const [value,setValue]=useState(0);
    // useEffect(()=>{
    //     if(value >= 1){
    //     document.title =`Login Form (${value})`
    // } else{
    //     document.title =`Login Form`
    // }
    // })
    useEffect(()=>{
        (value >= 1) ? document.title =`Login Form (${value})` : document.title =`Login Form`;
    },[value])
  return (
    <>
    <div className='useEffect'>
    <h2 className='text-center'>UseEffect Hook</h2>
      <h4>{value}</h4>
        <button className='btn btn-primary' onClick={()=>setValue(value+1)}>Click to add in value</button>
    </div>
    </>
  )
}

export default UseEffect1
