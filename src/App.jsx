import React from 'react'
import Product from './Product'
import Events from './Events'
import Count from './Count'
import Condition from './Condition'
import Form from './Form'
import Effect from './Effect'
import Api from './Api'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Courses from './Pages/Courses'
import Home from './Pages/Home'
import Team from './Pages/Team'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import C_details from './Pages/C_details'
import Navbar from './Navbar'
import './App.css'
import Dashboard from './Pages/Dashboard'
import People from './People'
import Facebook from './Pages/Facebook'
import Insta from './Pages/Insta'
import Lnkdin from './Pages/Lnkdin'
import Whatsapp from './Pages/Whatsapp'
import { useSelector, useDispatch } from 'react-redux'
import { incremented, decremented, incrementedBy10, decrementedBy10, setValue0 } from './Redux/counterSlice.js'


const App = () => {

  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const person = {
    Age: 3,
    name: "patel",
  }

  return (
    <>
      {
        <>


          { /* <Form />
        
        <Effect />
        <Api /> */ }


          <Router>
            < Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/contact" element={<Contact />} >
                <Route path="instagram" element={<Insta />} />
                <Route path="facebook" element={<Facebook />} />
                <Route path="lnkdin" element={<Lnkdin />} />
                <Route path="whatsapp" element={<Whatsapp />} />
              </Route>
              <Route path="/team" element={<Team />} />
              <Route path="/c_details" element={<C_details />} />
              <Route path="/courses/:id" element={<C_details />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/people" element={<People />} />





            </Routes>


          </Router>



          <h1>Counter Value: {counter} </h1>

          <div> <button onClick={() => dispatch(incremented())} >Increment</button></div>
          <div> <button onClick={() => dispatch(decremented())} >Decrement</button></div>
          <div><button onClick={() => dispatch(incrementedBy10())} >Increment By 10</button>
            <button onClick={() => dispatch(decrementedBy10())} >Decrement By 10</button></div>
          <div><button onClick={() => dispatch(setValue0())} >Refresh</button></div>
          <h1>Counter Value: {counter} </h1>




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
