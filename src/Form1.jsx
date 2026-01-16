import React from 'react'
import { useState } from 'react'

const Form = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    

    const formHandeling = (m) => {
        m.preventDefault();
        alert("your message have been submit" +"  "+ name+"  "+email+"  "+password+"  ")


    }

    return (
        <form onSubmit={formHandeling}>
            <div>
                Name:-<input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Your name' />
            </div>
            <h3> {name}</h3>
            <div>
                Email:-<input value={email} onChange={(e) => setEmail(e.target.value)}   type='email' placeholder='your email' />
            </div>
        
            <h3> {email} </h3>
            <div>
                Password:-<input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='password' />
            </div>
            <h3> {password}</h3>
            <button> Submit </button>



        </form>
    )
}

export default Form