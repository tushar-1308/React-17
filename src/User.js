import Props from './Props';
import React, { Component, useState } from 'react';

// function User() {
//   const [name, setName] = useState("Tushar")
//   function apple(){
//     alert("Apples");
//   }
//   return (
//     <div className="App">
//       <Props name={name} email="tushar@accenture.com" other = {{address:"Barnala", mobile:"123"}}/>

//       {/* <Props name={name} func = {()=>apple()} /> */}
//       <button onClick={()=>{setName("Bansal")}}>Change name</button>
//     </div>
//   );
// }

class User extends Component {
  constructor(){
    super();
    this.state={
      name: "Tushar"
    }
  }
  render(){
    return (
      <div className="App">
        <Props name={this.state.name} email="tushar@accenture.com" other={{ address: "Barnala", mobile: "123" }} />

        {/* <Props name={name} func = {()=>apple()} /> */}
        <button onClick={()=>this.setState({name:"Bansal"})}>Change name</button>
      </div>

    )
  }
}

export default User;