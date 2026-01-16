import React from 'react'

const Condition = () => {
    const person ={
        name:"maitrik",
        age:"19",
    

    }

  return (
    <div>
    <h2>{person.name}{(person.age)>18 ? (person.name = "can drive"): (person.name ="cannnot drive")}</h2>
    </div>

  )
}

export default Condition