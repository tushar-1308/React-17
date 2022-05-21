import React, { Component } from "react"

// Props in function component

// function Props(props){
//     return(
//         <div>
//             <h2>{props.name}</h2>
//             {/* <h2>{props.email}</h2>
//             <h2>{props.other.address}</h2>
//             <h2>{props.other.mobile}</h2> */}
//             {props.func}
//         </div>
//     )
// }



// Props in class component

class Props extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.name}</h2>
                <h2>{this.props.email}</h2>
                <h2>{this.props.other.address}</h2>
                <h2>{this.props.other.mobile}</h2>
            </div>
        )
    }
    
}

export default Props