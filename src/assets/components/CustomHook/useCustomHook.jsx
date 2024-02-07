import React, { useEffect } from 'react'

const useCustomHook = (count) => {
    useEffect(()=>{
        console.log("I am First one")
        if(count >=1){
            document.title=`Chats ${count}`
        }else{
            document.title=`Chats `
        }
    })
}

export default useCustomHook
