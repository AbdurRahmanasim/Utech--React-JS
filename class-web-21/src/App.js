import React from "react"
import Signup from "./Signup"
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Login from "./Login.js"
import Studenthome from "./Studentome.js"
import Teacherhome from "./Teacherhome.js"
// function App() {

//   const [input , setInput] = useState('');
//   const [todo ,setTodo] =useState([]);
//   const [toggle ,setToggle] = useState(false)
  
//   const addTodo = () => {
//     setTodo([...todo , input])
//     localStorage.setItem('Todo',JSON.stringify([...todo , input]))
//     setInput('');
//   }

// const change = ()=>{
//   setToggle(!toggle)
// }

//   const deleteAll = () =>{
//     setTodo([]);
//   }
//   useEffect(()=>{
//     let data = JSON.parse(localStorage.getItem('Todo'))
//   if(data){
//     setTodo(data)
//   }
//   console.log('Hello World')
//   },[toggle])

//   return (
//   <>
// <input type="text" name={input} onChange={(e)=>{setInput(e.target.value)}} />
// <button onClick={addTodo}>Add Todo</button>
// <button onClick={deleteAll}>Delete All</button>
// <button onClick={change}>Change</button>

// {
//   todo.map((val,ind)=>{
//     return(
//       <>
//       <div key={ind}>
//       <p>{val}</p>
//       </div>
//     </>
//     )

//   })
// }

//   </>
//   );
// }

// export default App;





function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/studentdashboard" element={<Studenthome/>} />
        <Route path="/teacherdashboard" element={<Teacherhome/>} />
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App