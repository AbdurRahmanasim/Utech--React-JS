import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import "./home.css"

function Home() {

    const Navigate = useNavigate()

// function gotodifferentpage(){

// Navigate("/about")

// }

  return (
    <>


{/* <div>This is Home Page</div>

<button onClick={gotodifferentpage} >Go to About</button> */}

<Navbar />

<h1 className='fadeInLeft'>This is Home Page</h1>


    </>
  )
}

export default Home