import React from 'react'
import { useNavigate } from "react-router-dom";

function Navbar() {

    const Navigate = useNavigate()


 function gotohome(){

Navigate("/")

 }


 function gotoabout(){

    Navigate("/about")
    
     }


     function gotocontact(){

        Navigate("/contact")
        
         }


  return (
    <>
   

   <nav className="navbar navbar-expand-lg navbar-light bg-warning">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <p className="nav-link" onClick={gotohome} >Home<span className="sr-only">(current)</span></p>
      </li>
      <li className="nav-item">
     
      <p className="nav-link" onClick={gotoabout} >About<span className="sr-only">(current)</span></p>

      </li>
      
      <li className="nav-item">
       
      <p className="nav-link" onClick={gotocontact} >Contact<span className="sr-only">(current)</span></p>

      </li>
    </ul>
   
  </div>
</nav>




    </>
  )
}

export default Navbar