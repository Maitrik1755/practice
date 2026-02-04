import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
    // const  [isLoggin, setIsLoggin] = useState(false)
    const navigate = useNavigate()

    // const loggin= () => {
    //     setIsLoggin(true)
    //     navigate('/dashboard')


    // }
    // const loggout =() => {
    //     setIsLoggin(false)
    // }


    return (
        <nav className="fixed top-0 left-0 w-full bg-black text-green-400 px-10 py-8 flex justify-end z-50">
            <div className="flex-1 ">
                <Link to={'/'} className="text-green-500 hover:text-red-500 no-underline text-3xl">LOGO</Link>

            </div>

            <div className="flex gap-7 text-green-500 text-xl">
   {/* {isLoggin && (<> */}
                <Link
                    to="/dashboard"
                    className="text-green-500 hover:text-white no-underline"
                >
                    Dashboard
                </Link>


                <Link
                    to="/courses"
                    className="text-green-500 hover:text-white no-underline"
                >
                    Courses
                </Link>

                <Link
                    to="/team"
                    className="text-green-500 hover:text-white no-underline"
                >
                    Team
                </Link>
                {/* </>) } */}
                {/* {!isLoggin && (<> */}

                <Link
                    to="/contact"
                    className="text-green-500 hover:text-white no-underline"
                >
                    Contact
                </Link>

                <Link
                    to="/about"
                    className="text-green-500 hover:text-white no-underline"
                >
                    About
                </Link> 
                {/* <button
                    className="  px-4 py-2
    bg-green-500
    text-black
    hover:bg-black
    hover:text-white
    hover:scale-105
    transition
    duration-300
    rounded"
                              
                              

               onClick={loggin} >
                    Login
                </button> </>)}
               {isLoggin && (<> <Link
                    className=" px-4 py-2
  bg-green-500 
  text-black
  hover:bg-black
  hover:text-white
  hover:scale-105
  transition
  duration-300
  rounded"
                onClick={loggout}>
                    Logout
                </Link></>)} */}




            </div>


        </nav>
    )
}

export default Navbar
