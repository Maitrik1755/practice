import React from 'react'

const Events = () => {
  const handleClick = () => {
    alert("you click this button")
  }
  return (
 <div>
    <button onClick={handleClick}>click button</button>
 </div>
  )
}

export default Events