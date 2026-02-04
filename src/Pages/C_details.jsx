import React from 'react'
import { useParams , Link , useLocation} from 'react-router-dom'

const C_details = () => {
    //console.log(useParams())
    const {id} = useParams()
    const location = useLocation()
    const arr=[{id:1, c_name:"React" , c_price:2000 },
    {id:2, c_name:"Python" , c_price:4000 },
    {id:3, c_name:"Html" , c_price:5000 },
    {id:4, c_name:"Flutter" , c_price:4000 }
]
 const C_details= arr.filter((data)=>data.id == id)
 console.log(C_details)
  return (
    <>
<div>
     <div>C_details</div>
    <h1>
    Course id = {id}
    
    </h1>
    
    <h1>
    Course Name = {C_details[0].c_name}
     
    </h1>
    {location.pathname != "/courses/2" && (<h1>
    Course Price = {C_details[0].c_price}
    </h1>)} 
    
    
</div>
    <button> <Link to={'/courses'}> All courses</Link></button>
    
    </>
  )
}

export default C_details