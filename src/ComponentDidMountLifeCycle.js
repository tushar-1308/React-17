import React, { Component } from "react";

class ComponentDidMountLifeCycle extends Component{
    constructor(){
        super();
        this.state = {
            name:"Tushar"
        }
        console.warn("Constructor");
    }
    componentDidMount(){
        console.warn("Component did mount");
    }
    render(){
        console.warn("Render");
        return(
            <div>
                <h1>Component Did Mount Life Cycle {this.state.name}</h1>
                <button onClick={()=>this.setState({name:"Bansal"})}>Update button</button>
            </div>
            
        )
    }
}

export default ComponentDidMountLifeCycle;