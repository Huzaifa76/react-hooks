import React from 'react'
import { useContext } from 'react'
import { AppContext } from './Usecontext'

const Child = () => {
    const { userData, userRole } = useContext(AppContext);
  return (
    <div>
       <h3>My name is {userData.name} and my age is {userData.age}.</h3>
       <h4>My job role is {userRole.position} and my company name is {userRole.company}</h4>
    </div>
  )
}

export default Child
