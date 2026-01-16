import React from 'react'
import Product from './Product'
import Events from './Events'
import Count from './Count'
import Condition from './Condition'
import Form from './Form'
import Effect from './Effect'
import Api from './Api'


const App = () => {

  const person = {
    Age: 3,
    name: "patel",
  }
  return (
    <>
      {
        <><Form />
        
        <Effect />
        <Api />
        
        </>
      /* <div>
        <h1>Age={person.Age}</h1>
        <h1>Name={person.name}</h1>


      </div>

      <Product title="iphone 16"
        brand="apple"
        price={10000}
      />
      <Product title="samsung 16"
        brand="samsung"
        price={10000}
      />
      <Product title="redmy 16"
        brand="redmy"
        price={10000}
      />
      <Product title="realmy 16"
        brand="realmy"
        price={10000}
      />
      <div>
        <h3>{2 + 3}</h3>
      </div>
      <Events />

      <Count />
      <Condition /> */
        
      
      
      
      
      
      
      
      
      }

    </>
  )
}

export default App
