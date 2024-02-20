import { createContext } from "react"
export const Context = createContext(null)
const name = "REACTNATIVE"
function GlobalContext({children})
{
    return (
        <Context.Provider value={{name}}>
        {children}
        </Context.Provider>
    )
}
export default GlobalContext
