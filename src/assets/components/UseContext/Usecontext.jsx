import { createContext  } from "react";

const AppContext= createContext();

const AppProvider = ({children})=>{
    const userData={
        name:"Huzaifa",
        age:22
    }
    const userRole={
        position:"Front End Developer",
        company:"Napollo Design Co."
    }

    const contextValue ={userData,userRole}
    return <AppContext.Provider value={contextValue}>
        {children}
    </AppContext.Provider>
}

export {AppContext, AppProvider}