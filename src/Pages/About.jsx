import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
   
  const goToCourses = () =>{
    navigate('/courses')
  }
  const goBack = () => {
    navigate(-1)
  }
  return (
    <>
    <button onClick={goToCourses}>Go to courses</button>
    <button onClick={goBack}>Go back</button>
    </>
  )
}

export default About