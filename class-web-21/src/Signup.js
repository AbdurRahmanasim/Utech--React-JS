import React ,{useState} from 'react'
import {useNavigate} from "react-router-dom"


function Signup() {

   let navigate = useNavigate() ;

    const [userName,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [contact,setContact] = useState('')
    const [role,setRole] = useState('')
    const [pass,setPass] = useState('')
    const [confirm,setConfirm] = useState('')



    const signup = () =>{

        if(!userName || !email || !contact || !role || !pass || !confirm ){
              alert('Fill all Fields');
        }
        else{
           if(pass == confirm){
            let oldData = JSON.parse(localStorage.getItem('SignUp'))
            let data = {
                userName ,
                email ,
                contact ,
                role ,
                pass ,
            }
           
                if(!oldData){
                    localStorage.setItem('SignUp' , JSON.stringify([data]))
                    navigate('/login')
                }
                else{
                    let flag = false ;
                    for(let i in oldData){
                        if(oldData[i].email == data.email){
                            alert('Email Already Exits');
                            flag = true
                        }
                        
                    }
                    if(flag == false){
                        localStorage.setItem('SignUp' , JSON.stringify([...oldData , data]))
                        navigate('/login')
                    }
                   
                }
            
            
          
        }
        else{
            alert('Password and Confirm Password Doesnot Match')
        }
        }


    }

  return (
<>
    <h1>SignUp Form</h1>

    <input type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}} placeholder='UserName' /><br />
    <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' /><br />
    <input type="number" value={contact} onChange={(e)=>{setContact(e.target.value)}} placeholder='Contact No' /><br />
    <input type="text" value={role} onChange={(e)=>{setRole(e.target.value)}} placeholder='Role' /><br />
    <input type="password" value={pass} onChange={(e)=>{setPass(e.target.value)}} placeholder='Password' /><br />
    <input type="password" value={confirm} onChange={(e)=>{setConfirm(e.target.value)}} placeholder='Confirm Password' /><br />
    <br />
    <button onClick={signup}>SignUp</button>
</>
  )
}

export default Signup