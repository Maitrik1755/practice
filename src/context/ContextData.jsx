import React, { useState } from 'react'
import ContextState from './ContextState'

const ContextData = (props) => {
    const money=1000
    const dollar=2000
    const [counter, setCounter] = useState(0)
  return (

 <ContextState.Provider value={{
money,
dollar,
counter,
setCounter,

 }}>
    {props.children}
   

 
 
 
 </ContextState.Provider>

  )
}

export default ContextData;