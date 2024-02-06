import React, { useState, useReducer } from "react";
import reducer from "./reducer";

const ReducerHook = () => {
  // const [value,setValue]=useState(0);
  const initialArg = 0;
  const [value, dispatch] = useReducer(reducer, initialArg);
  return (
    <div>
      {/* use State */}
      {/* <button className='btn btn-primary' onClick={()=>{setValue(value+1)}} >+</button>
        <h6>{value}</h6>
        <button className='btn btn-primary' onClick={()=>{(value ===0)  ? setValue(value) : setValue(value-1) }}>-</button> */}

      {/* use Reducer */}
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "INC" })}
      >
        +
      </button>
      <h6>{value}</h6>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "DEC" })}
      >
        -
      </button>
    </div>
  );
};

export default ReducerHook;
