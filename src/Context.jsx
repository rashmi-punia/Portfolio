import React,{createContext, useState} from 'react'

export const GlobalContext = createContext(null);


const GlobalState = ({ children }) => {
    const [lightMode,setLightMode] = useState(true)
  return (
    <GlobalContext.Provider
        value={{
lightMode,setLightMode
        }}>
{children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
