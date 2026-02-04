import React, {useContext} from 'react'
import ContextData from './context/ContextData'
import ContextState from './context/ContextState'

const People = () => {
    console.log(useContext(ContextState))
    const data = useContext(ContextState);

  return (
    <>
   <h1>Money={data.money}</h1>
   <h1>{data.counter}</h1>
   <div className="text-black flex gap-7 items-center">
   <button onClick={()=> data.setCounter(data.counter+1)}
     className="
      px-5 py-2
      bg-blue-500
      text-white
      rounded-lg
      hover:bg-green-600
      hover:scale-105
      transition
      duration-300
      shadow-md
    ">Increment</button>
   
   <button onClick={()=> data.setCounter(data.counter-1)}
     className="
      px-5 py-2
      bg-blue-500
      text-white
      rounded-lg
      hover:bg-red-600
      hover:scale-105
      transition
      duration-300
      shadow-md
    ">Decrement</button>
   </div>
</>
  )
}

export default People