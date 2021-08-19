import React, { useState } from 'react';

function Register () {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function signUp()
    {
        let item ={name,email,password}
             console.warn(item)
    
    let result= await fetch("http://localhost:8000/api/register",{
        method:'POST',
        body:JSON.stringify(item),
        headers:{
            "Content-Type": 'application/json',
            "Accept":'application/json'     
        }
    })
    result =await result.json()
    console.warn("result",result)
}
         return (

        <div>
                <h3>Sign Up</h3>

                <div className=" col-sm-6 offset-sm-3">
                    <label>Name</label>
                    <input type="text" value ={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name" />
                    <br />
                    <label>Email address</label>
                    <input type="email"  value ={email}onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Enter email" />
                    <br />
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" onClick={signUp} className="btn btn-primary btn-block">Sign Up</button>
        </div>
    )
}

export default Register
