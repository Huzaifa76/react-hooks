import React, { useState } from "react";

const Form = () => {
    const [email, setEmail] =useState("")
    const [password, setPassword] =useState("")
    const [allEntry,setAllEntry] =useState([])

    const submitForm =(e)=>{
      if(email && password){
        e.preventDefault(); 
        const newEntry= {id:new Date().getTime().toString(),email ,password};
        setAllEntry([...allEntry , newEntry]);
        console.log(allEntry);
        setEmail("");
        setPassword("");
      } else{
        e.preventDefault(); 
        alert("Please Fill the Login Information")
      }
    }
  return (
    <>
      <div className="container login_form">
      <h1 className='text-center mb-4'>User Login Form</h1>
        <form action="" onSubmit={submitForm}>
          <div className="mb-3">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              autoComplete="off"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              autoComplete="off"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
        <div className="form_data">
        <h3 className="text-center">User Data</h3>
            {
        allEntry.map((data)=>{
          const {email,password,id}=data;
            return (<>
            <div className="form_users" key={id}>
                <div className="w-50">{`Email: ${email}`}</div>
                <div className="w-50">{`Password: ${password}`}</div>
                </div>
                </>
            )
        })
    }
      </div>
      </div>
    </>
  );
};

export default Form;
