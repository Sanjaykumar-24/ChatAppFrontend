import { createContext, useState } from "react"
export const Context = createContext(null)

function GlobalContext({children})
{
    const [showLoginView,setLoginView] = useState(false)
    const [registerModel,setRegisterModel] = useState(false)
    const [loginModel,setLoginModel] = useState(false)
    const [group,setGroup] = useState(false)
    const [join,setJoin] = useState(false)
    const [groupId,setGroupId] = useState('')
         return (
        <Context.Provider value={{groupId,setGroupId,join,setJoin,group,setGroup,showLoginView,setLoginView,registerModel,setRegisterModel,loginModel,setLoginModel}}>
        {children}
        </Context.Provider>
    )
}

export default GlobalContext
