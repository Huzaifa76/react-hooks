import React,{useEffect, useState} from 'react'

const UseEffect2 = () => {
  const [width, setWidth] = useState(window.screen.width);

  useEffect(()=>{
    window.document.addEventListener("resize", resizeScreen)
    return ()=>{
      window.document.removeEventListener("resize", resizeScreen)
    }
  });
  const resizeScreen=()=>{
    setWidth(window.innerWidth);
  }
  return (
    <div className='useEffect'>
      <h3>Here is the acutual width of screen....</h3>
      <h5>{width}</h5>
    </div>
  )
}

export default UseEffect2
