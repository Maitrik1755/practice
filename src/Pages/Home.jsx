import React, { use, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Home = () => {
  const [counter, setcounter] = useState((+localStorage.getItem('counter')) || 0)
  const increment = () => {
    setcounter(counter + 1)

  }

  useEffect(() => {
   localStorage.setItem('counter',counter.toString())
  }, [counter])
   
  const Refresh = () => {
    setcounter(0)
  }
  const clearStorage = () => {
    localStorage.clear()
    
  }
  return (
    <>
    {/* <div>Home</div>
    
    <button><Link to={'/courses'}>Courses</Link></button>

    <div className='flex gap-10 text-lg font-medium'>
       <h1>{counter}</h1>
    <button onClick={increment}>increment</button>
    
   
   </div>
   <div>
    <button onClick={Refresh}>Refresh</button>
   </div>
   <div>
    <button onClick={clearStorage}>Clear Storage</button>
   </div> */}
    </>
  )
}

export default Home