import React,{createContext, useState,useRef} from 'react'

export const GlobalContext = createContext(null);


const GlobalState = ({ children }) => {
    const [lightMode,setLightMode] = useState(true)

    
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const homeRef = useRef(null);

  return (

    <GlobalContext.Provider
        value={{
lightMode,setLightMode,aboutRef,portfolioRef
        }}>
{children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
