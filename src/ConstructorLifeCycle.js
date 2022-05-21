import React, { Component } from "react";

class ConstructorLifeCycle extends Component{
    
    constructor(){
        super();
        console.log('constructor');
        this.state={
            name: "Tushar"
        }
    }
    
    render(){
        console.log('render');
        return(
            <div>
                <h1>Constructor Life Cycle</h1>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}

export default ConstructorLifeCycle;