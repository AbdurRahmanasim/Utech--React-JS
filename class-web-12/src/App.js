import React, { Component } from "react"

class App extends Component{


  constructor(){
    super();
    this.state = {

      count : 0
    }
   
  }

  updateCounter(){

    this.setState({count : this.state.count + 1})
  }

  decrementCounter(){

    this.setState({count : this.state.count - 1})

  }


  render(){

    return(
      <>
      <div style={{display : "flex" , justifyContent : "center" , flexDirection : "column"  }}>

<h1 style={{background : "blue" , color : "white" , textAlign : "center"}}>{this.state.count}</h1>

<button onClick={()=>{this.updateCounter()}}  style={{ background : "green" ,color: "white" }}>Increment</button>
<button onClick={()=>{this.decrementCounter()}} style={{ background : "red" ,color: "white" }} >Decrement</button>
     
</div>
      </>)

  }

} 

export default App ;

