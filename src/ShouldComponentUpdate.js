import { Component } from "react";

class ShouldComponentUpdate extends Component{
    constructor(){
        console.warn("constructor")
        super();
        this.state = {
            count: 0
        }
    }
    shouldComponentUpdate(){
        console.warn("should component update", this.state.count)
        // return true;
    }
    render(){
        console.warn("render")
        return(
            <div>
                <h1>shouldComponentUpdate Life Cycle {this.state.count}</h1>
                <button onClick={()=>{this.setState({count: this.state.count+1})}}>Update button</button>
            </div>
        )
    }
}

export default ShouldComponentUpdate