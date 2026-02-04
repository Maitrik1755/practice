import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Courses = () => {

const arr=[{id:1, c_name:"React" , c_price:2000 },
    {id:2, c_name:"Python" , c_price:4000 },
    {id:3, c_name:"Html" , c_price:5000 },
    {id:4, c_name:"Flutter" , c_price:4000 }
]

 const navigate = useNavigate()
 const goToAbout = () => {
  navigate('/about')
 }
  return (
    <>
     <div>Courses</div>
<div>
    <ul>
    {arr.map((data)=><div key={data.id}>
    <li><Link to={`/courses/${data.id}`}>{data.c_name}</Link>{""}</li>
    



    </div>)}
    </ul>
    </div>
     <button onClick={goToAbout}>Go to About</button>
    

    </>
  )
}
 
export default Courses