import { createContext, useState } from "react"
export const Context = createContext(null)
function GlobalContext({children})
{
    const [showLoginView,setLoginView] = useState(false)
    const [registerModel,setRegisterModel] = useState(false)
    const [loginModel,setLoginModel] = useState(false)
    return (
        <Context.Provider value={{showLoginView,setLoginView,registerModel,setRegisterModel,loginModel,setLoginModel}}>
        {children}
        </Context.Provider>
    )
}
export default GlobalContext
