import React, { useState } from 'react'
import {Navigate, useNavigate} from "react-router-dom"

function Login() {

  let navigate =  useNavigate();
  const [loginEmail , setLoginEmail] = useState('');
  const [loginPassword , setloginPassword] = useState('');

  const login = () => {
    let signupData = JSON.parse(localStorage.getItem('SignUp'));
    // console.log(signupData)
    if(!loginEmail || !loginPassword){
      alert("Fill all fields")
    }
    else{
     let flag = true
      for(let i = 0 ; i < signupData.length ; i++){
        if(loginEmail == signupData[i].email && loginPassword == signupData[i].pass){
          
          let role = signupData[i].role ;
          if(role == "student"){
            navigate('/studentdashboard')
           
          flag = false
          }
          else{
            navigate('/teacherdashboard')
          flag = false
          }
          
        }
        
      }
      if(flag){
        alert('Incorrect email and Password')
      }

    }

  }


  return (
<>
    <h1>Login Form</h1>

    <input type="text" value={loginEmail} onChange={(e)=>{setLoginEmail(e.target.value)}} placeholder='Email' /><br />
    <input type="password" value={loginPassword} onChange={(e)=>{setloginPassword(e.target.value)}} placeholder='Password' /><br />
    <br />
    <button onClick={login}>Login</button>
</>
  )
}

export default Login