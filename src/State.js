// state in function component

// import {useState} from 'react';

// function State(){
//     const [data, setData] = useState("Tushar")
//     function states(){
//         setData("Bansal")
//     }
//     return(
//         <div>
//             <h1>{data}</h1>
//             <button onClick={states}>Click me</button>
//         </div>
        
//     )
// }


// state in class component

import React, {Component} from 'react';

class State extends Component{
    
    constructor(){
        super();
        this.state = {
            data: "Tushar"
        }
    }

    states() {
        this.setState({data:"Bansal"})
    }

    render(){
        return(
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.states()}>Click me</button>
            </div>
            
        )
    }
}

export default State