import React from 'react'

const Product = ({title,brand,price}) => {
  return (
   <>
        <div>
            <h2>mobile name= {title}</h2>
            <h2>brand={brand}</h2>
            <h2>price={price}</h2>
        </div>
   </>
  )
}

export default Product