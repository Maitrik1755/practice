import React from 'react'

const Condition = () => {
    const person ={
        name:"mannu",
        age:"19",
    

    }

  return (
    <div>
    <h2>{(person.age)>18 ? "you can drive" : "you cannnot drive"}</h2>
    </div>

  )
}

export default Condition