// Ref is used for DOM manipulation but react itself not recommend
// to use it until urgent

import { Component, createRef } from "react";

class Ref extends Component{
    constructor(){
        super();
        this.inputRef = createRef();
    }

    getVal() {
        console.warn(this.inputRef.current.value)
        this.inputRef.current.style.color = "red";
        this.inputRef.current.style.backgroundColor = "black";
    }

    render(){
        return(
            <div>
                <h1>Ref in React Js</h1>
                <input type="text" ref={this.inputRef}></input>
                <button onClick={()=>this.getVal()}>Check Ref</button>
            </div>
        )
    }
}

export default Ref;