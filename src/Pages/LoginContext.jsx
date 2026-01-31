import { createContext, useState } from "react";

export const LoginContext = createContext()

export const LoginProvider=({children})=>{
const islogin = localStorage.getItem("isLoggedin")

let [isLoggedin, setLoggedIn] = useState(islogin=="true"?true :false)

return <LoginContext.Provider value={{isLoggedin, setLoggedIn}}>
{children}
</LoginContext.Provider>
}