import React , {useState} from 'react'


function Body() {

const [num , setNum] = useState(0)


  return (
   <>
   <div className="container">
<h1>{num}</h1>
<button onClick={()=>{setNum(num + 1)}}>Increment</button>
<br /><br />
<button onClick={()=>{setNum(num - 1)}}>Decrement</button>


</div>



   </>
  )
}

export default Body